using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project_Vpd.Models;
using Project_Vpd.RepositoryPattern;

namespace Project_Vpd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VegetableController : ControllerBase
    {
        private readonly IVegetableRepository context;
        public VegetableController(IVegetableRepository context)
        {
            this.context = context;
        }
        
        [HttpGet("VegetableDetails")]
        public ActionResult<IEnumerable<Vegetable>> Get()
        {
            return Ok(context.GetVegetables());
        }
        [HttpPost("Add Vegetables")]
        public ActionResult Post(Vegetable vegetable)
        {
            
                var result = context.AddVegetable(vegetable);
                if (result == 1)
                    return Ok("Vegetable Added SuccessFull");
                else
                    return BadRequest("Vegetable Failed tO Add");  

        }

        [HttpPut("UpdateVegetables")]
        public ActionResult Put(Vegetable vegetable)
        {
            var results = context.UpdateVegetable(vegetable);
            if (results == 1)
                return Ok("Vegetable Updated Sucessfull");
            else
                return BadRequest("vegetable Updation Failure!!");

        }

        [HttpDelete("Delete Vegetables")]
        public ActionResult Delete(int id)
        {
            var results = context.DeleteVegetable(id);
            if (results == 1)
                return Ok("Vegetable deleted Successfull");
            else
                return BadRequest("No Record Found To Delete!!");
        }
    }
}
