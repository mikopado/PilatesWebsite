using System.Net;

namespace PilatesWebApi.Application.ResponseObjects
{
    public class ApiResponse
    {
        public int StatusCode { get; }
        public object Result { get; }
        public string Message { get; }

        public ApiResponse(int code, object data = null, string message = null)
        {
             StatusCode = code;
             Result = data;
             Message = message ?? GetDefaultMessageForStatusCode(code);
        }
        public ApiResponse(HttpStatusCode code, object data = null, string message = null)
        {
            StatusCode = (int)code;
            Result = data;
            Message = message ?? GetDefaultMessageForStatusCode((int)code);
        }
        public ApiResponse()
        {

        }

        private string GetDefaultMessageForStatusCode(int code)
        {
            return code switch
            {
                400 => "Input was in wrong format.",
                500 => "Oops. Something went wrong.",
                401 => "Authentication failed. User is not authenticated.",
                404 => "The resource has been not found",
                _ => null,
            };
        }
    }

}
