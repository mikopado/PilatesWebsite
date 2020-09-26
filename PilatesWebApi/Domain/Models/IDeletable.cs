namespace PilatesWebApi.Domain.Models
{
    public interface IDeletable
    {
        bool IsDeleted { get; set; }
    }
}
