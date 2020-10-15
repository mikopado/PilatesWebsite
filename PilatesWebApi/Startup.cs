using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Protocols;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using PilatesWebApi.Application;
using PilatesWebApi.Application.Services;
using PilatesWebApi.Infrastructure.DAL;
using PilatesWebApi.Infrastructure.DAL.Repositories;
using System;
using System.Net;

namespace PilatesWebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddNewtonsoftJson(options =>
            {
                options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                //options.SerializerSettings.DefaultValueHandling = DefaultValueHandling.Ignore;
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });
            
            // TODO Sorting out services by purpose. Check repository of Architecture best practice??
            services.AddDbContext<PilatesDbContext>(options => options.UseNpgsql(Configuration.GetConnectionString("PilatesDb")));
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IClassService, ClassService>();
            services.AddScoped<IMembershipService, MembershipService>();
            services.AddScoped<ITeacherService, TeacherService>();
            services.AddScoped<IMemberService, MemberService>();
            services.AddScoped<IUserService, UserService>();


            services.AddAutoMapper(typeof(Startup).Assembly);

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Pilates API", Version = "v1" });
            });
            services.AddCors();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
               .AddJwtBearer(options =>
               {
                   options.TokenValidationParameters = new TokenValidationParameters
                   {
                       ValidateIssuerSigningKey = true,
                       ValidateIssuer = true,
                       ValidateAudience = false,
                       ValidIssuer = Configuration["Authorization:Issuer"],
                       ValidateLifetime = true,
                       // set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)
                       ClockSkew = TimeSpan.Zero,
                       IssuerSigningKeyResolver = (s, securityToken, identifier, parameters) =>
                       {
                           // get JsonWebKeySet from AWS
                           var json = new WebClient().DownloadString(parameters.ValidIssuer + "/.well-known/jwks.json");
                           var keys = JsonConvert.DeserializeObject<JsonWebKeySet>(json).Keys;
                           return keys;
                       },
                   };

               });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Pilates API V1");
            });

            app.UseHttpsRedirection();

            app.UseRouting();

            //app.UseAuthentication();

            //app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
