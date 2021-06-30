using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FarmFinder.Models;

namespace FarmFinder.Controllers
{
    // All of these routes will be at the base URL:     /api/Farms
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case FarmsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class FarmsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public FarmsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Farms
        //
        // Returns a list of all your Farms
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Farm>>> GetFarms(string filter)
        {
            // Uses the database context in `_context` to request all of the Farms, sort
            // them by row id and return them as a JSON array.


            if (filter == null)
            {
                return await _context.Farms.OrderBy(row => row.Id).ToListAsync();


            }
            else
            {
                switch (filter)
                {
                    //show all farms if no city is selected
                    case "city":
                        return await _context.Farms.OrderBy(row => row.Id).ToListAsync();
                    case "tampa":
                        return await _context.Farms.Where(farm => farm.City == "Tampa").ToListAsync();
                    case "st. pete":
                        return await _context.Farms.Where(farm => farm.City == "St. Pete").ToListAsync();


                    case "to":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.City == "Tampa").ToListAsync();
                    case "so":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.City == "St. pete").ToListAsync();
                    case "o":
                        return await _context.Farms.Where(farm => farm.Organic == true).ToListAsync();

                    case "tom":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Meat == true && farm.City == "Tampa").ToListAsync();
                    case "som":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Meat == true && farm.City == "St. Pete").ToListAsync();
                    case "om":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Meat == true).ToListAsync();

                    case "toe":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Eggs == true && farm.City == "Tampa").ToListAsync();
                    case "soe":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.City == "St. Pete").ToListAsync();
                    case "oe":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Eggs == true).ToListAsync();

                    case "tod":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Dairy == true && farm.City == "Tampa").ToListAsync();
                    case "sod":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Dairy == true && farm.City == "St. Pete").ToListAsync();
                    case "od":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Dairy == true).ToListAsync();

                    case "tome":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Meat == true && farm.Eggs == true && farm.City == "Tampa").ToListAsync();
                    case "some":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Meat == true && farm.Eggs == true && farm.City == "St. Pete").ToListAsync();
                    case "ome":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Meat == true && farm.Eggs == true).ToListAsync();
                    
                    case "tomd":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Meat == true && farm.Dairy == true && farm.City == "Tampa").ToListAsync();
                    case "somd":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Meat == true && farm.Dairy == true && farm.City == "St. Pete").ToListAsync();
                    case "omd":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Meat == true && farm.Dairy == true).ToListAsync();
                    
                    case "tomed":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Meat == true && farm.Eggs == true && farm.Dairy == true && farm.City == "Tampa").ToListAsync();
                    case "somed":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Meat == true && farm.Eggs == true && farm.Dairy == true && farm.City == "St. Pete").ToListAsync();
                    case "omed":
                        return await _context.Farms.Where(farm => farm.Organic == true && farm.Meat == true && farm.Eggs == true && farm.Dairy == true).ToListAsync();
                    
                    case "tm":
                        return await _context.Farms.Where(farm => farm.Meat == true && farm.City == "Tampa").ToListAsync();
                    case "sm":
                        return await _context.Farms.Where(farm => farm.Meat == true && farm.City == "St. Pete").ToListAsync();
                    case "m":
                        return await _context.Farms.Where(farm => farm.Meat == true).ToListAsync();


                    case "tme":
                        return await _context.Farms.Where(farm => farm.Meat == true && farm.Eggs == true && farm.City == "Tampa").ToListAsync();
                    case "sme":
                        return await _context.Farms.Where(farm => farm.Meat == true && farm.Eggs == true && farm.City == "St. Pete").ToListAsync();
                    case "me":
                        return await _context.Farms.Where(farm => farm.Meat == true && farm.Eggs == true).ToListAsync();

                    case "tmd":
                        return await _context.Farms.Where(farm => farm.Meat == true && farm.Dairy == true && farm.City == "Tampa").ToListAsync();
                    case "smd":
                        return await _context.Farms.Where(farm => farm.Meat == true && farm.Dairy == true && farm.City == "St. Pete").ToListAsync();
                    case "md":
                        return await _context.Farms.Where(farm => farm.Meat == true && farm.Dairy == true).ToListAsync();
                   
                    case "tmde":
                        return await _context.Farms.Where(farm => farm.Meat == true && farm.Dairy == true && farm.Eggs == true && farm.City == "Tampa").ToListAsync();
                    case "smde":
                        return await _context.Farms.Where(farm => farm.Meat == true && farm.Dairy == true && farm.Eggs == true && farm.City == "St. Pete").ToListAsync();
                    case "mde":
                        return await _context.Farms.Where(farm => farm.Meat == true && farm.Dairy == true && farm.Eggs == true).ToListAsync();
                    
                    case "te":
                        return await _context.Farms.Where(farm => farm.Eggs == true && farm.City == "Tampa").ToListAsync();
                    case "se":
                        return await _context.Farms.Where(farm => farm.Eggs == true && farm.City == "St. Pete").ToListAsync();
                    case "e":
                        return await _context.Farms.Where(farm => farm.Eggs == true).ToListAsync();

                    case "ted":
                        return await _context.Farms.Where(farm => farm.Eggs == true && farm.Dairy == true && farm.City == "Tampa").ToListAsync();
                    case "sed":
                        return await _context.Farms.Where(farm => farm.Eggs == true && farm.Dairy == true && farm.City == "St. Pete").ToListAsync();
                    case "ed":
                        return await _context.Farms.Where(farm => farm.Eggs == true && farm.Dairy == true).ToListAsync();
                    
                    case "td":
                        return await _context.Farms.Where(farm => farm.Dairy == true && farm.City == "Tampa").ToListAsync();
                    case "sd":
                        return await _context.Farms.Where(farm => farm.Dairy == true && farm.City == "St. Pete").ToListAsync();
                    case "d":
                        return await _context.Farms.Where(farm => farm.Dairy == true).ToListAsync();
                    default:
                        return await _context.Farms.Where(farm => farm.Name.ToLower().Contains(filter.ToLower())).ToListAsync();
                }

            }

        }



        // GET: api/Farms/5
        //
        // Fetches and returns a specific farm by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Farm>> GetFarm(int id)
        {
            // Find the farm in the database using `FindAsync` to look it up by id
            var farm = await _context.Farms.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (farm == null)
            {
                // Return a `404` response to the client indicating we could not find a farm with this id
                return NotFound();
            }

            //  Return the farm as a JSON object.
            return farm;
        }

        // PUT: api/Farms/5
        //
        // Update an individual farm with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Farm
        // variable named farm. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Farm POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFarm(int id, Farm farm)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != farm.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in farm to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from farm
            _context.Entry(farm).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!FarmExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(farm);
        }

        // POST: api/Farms
        //
        // Creates a new farm in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Farm
        // variable named farm. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Farm POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Farm>> PostFarm(Farm farm)
        {
            // Indicate to the database context we want to add this new record
            _context.Farms.Add(farm);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetFarm", new { id = farm.Id }, farm);
        }

        // DELETE: api/Farms/5
        //
        // Deletes an individual farm with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFarm(int id)
        {
            // Find this farm by looking for the specific id
            var farm = await _context.Farms.FindAsync(id);
            if (farm == null)
            {
                // There wasn't a farm with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Farms.Remove(farm);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(farm);
        }

        // Private helper method that looks up an existing farm by the supplied id
        private bool FarmExists(int id)
        {
            return _context.Farms.Any(farm => farm.Id == id);
        }
    }
}
