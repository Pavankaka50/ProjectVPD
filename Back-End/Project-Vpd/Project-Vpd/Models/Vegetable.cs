using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Project_Vpd.Models
{
    public class Vegetable
    {
        [Required]
        public int VegetableId { get; set; }

        [Required]
        [StringLength(25)]
        public string? VegetableName { get; set; }

        [Required]
        public int VegetablePrice { get; set; }

    }
}
