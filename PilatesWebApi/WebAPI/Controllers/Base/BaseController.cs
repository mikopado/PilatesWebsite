using System;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using PilatesWebApi.Application.Exceptions;
using PilatesWebApi.Application.ResponseObjects;

namespace PilatesWebApi.WebAPI.Controllers.Base
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