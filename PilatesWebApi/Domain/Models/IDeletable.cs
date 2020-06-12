namespace PilatesWebApi.Domain.Models
{
    public interface IDeletable
    {
        public bool IsDeleted { get; set; }
    }
}
