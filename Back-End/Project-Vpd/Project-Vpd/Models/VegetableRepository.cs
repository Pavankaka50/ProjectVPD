using Project_Vpd.RepositoryPattern;

namespace Project_Vpd.Models
{
    public class VegetableRepository : IVegetableRepository
    {
        public readonly HomeContext context;

        public VegetableRepository(HomeContext context)
        {
            this.context = context;
        }
      public List<Vegetable> GetVegetables()
        {
            return context.Vegetables.ToList();
        }

      public int AddVegetable(Vegetable vegetable)
        {
          
                context.Vegetables.Add(vegetable);
                var data = context.SaveChanges();
                return data;
            
        }

        public int UpdateVegetable(Vegetable vegetable)
        {
            var result = context.Vegetables.FirstOrDefault(e=>e.VegetableId==vegetable.VegetableId);
            if(result==null)
            {
                return 0;
            }
            else
            {
                result.VegetableName = vegetable.VegetableName;
                result.VegetablePrice = vegetable.VegetablePrice;
                var data = context.SaveChanges();
                return data;
            }
        }

        public int DeleteVegetable(int id)
        {
            var result = context.Vegetables.FirstOrDefault(e => e.VegetableId == id);
            if (result != null)
            {
                context.Vegetables.Remove(result);
                var data = context.SaveChanges();
                return data;
            }
            else
                return 0;
        }
    }
}
