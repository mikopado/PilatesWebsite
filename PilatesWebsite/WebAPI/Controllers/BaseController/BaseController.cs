using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using PilatesWebsite.Application.Exceptions;
using PilatesWebsite.Application.ResponseObjects;

namespace PilatesWebsite.WebAPI.Controllers.BaseController
{
    public class BaseController : Controller
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                context.Result = new BadRequestObjectResult(new ApiResponse(HttpStatusCode.BadRequest));
            }
            base.OnActionExecuting(context);
        }
        public override void OnActionExecuted(ActionExecutedContext context)
        {
            if(context.Exception is NotFoundException notFoundException)
            {
                var statusCode = HttpStatusCode.NotFound;
                context.Result = new JsonResult(new ApiResponse(statusCode, message: notFoundException.Message)) { StatusCode = (int)statusCode };
                context.ExceptionHandled = true;
            }
            else if (context.Exception is Exception exception)
            {
                var statusCode = HttpStatusCode.InternalServerError;
                context.Result = new JsonResult(new ApiResponse(statusCode, message: exception.Message)) { StatusCode = (int)statusCode };
                context.ExceptionHandled = true;
            }
            
            base.OnActionExecuted(context);
        }
    }
}