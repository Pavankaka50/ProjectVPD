using Project_Vpd.Models;

namespace Project_Vpd.RepositoryPattern
{
    public interface IVegetableRepository
    {
        List<Vegetable> GetVegetables();
        public int AddVegetable(Vegetable vegetable);

        public int UpdateVegetable(Vegetable vegetable);

        public int DeleteVegetable(int id);
    }
}
