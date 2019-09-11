namespace Contracts
{
    public interface IUnitOfWork
    {
        IBusinessEntityRepository BusinessEntityRepository { get; set; }
        void Save();
        void Dispose();
    }
}