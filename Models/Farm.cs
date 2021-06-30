using System.ComponentModel.DataAnnotations;

namespace FarmFinder.Models
{

    public class Farm
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Enter a name.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Enter an address.")]
        public string Address { get; set; }

        [Required(ErrorMessage = "Enter a city.")]
        public string City { get; set; }

        [Required(ErrorMessage = "Enter a description.")]
        public string Description { get; set; }


        public string Phone { get; set; }

        [Required(ErrorMessage = "Enter a website URL.")]
        public string Website { get; set; }

        public bool Organic { get; set; }
        public bool Meat { get; set; }
        public bool Eggs { get; set; }
        public bool Dairy { get; set; }

        [Required(ErrorMessage = "Enter a photo.")]
        public string PhotoURL { get; set; }
    }
}

