namespace FarmFinder.Models
{



    public class Farm
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Description { get; set; }
        public string Phone { get; set; }
        public string Website { get; set; }
        public bool Organic { get; set; }
        public bool Meat { get; set; }
        public bool Eggs { get; set; }
        public bool Dairy { get; set; }
        // public string PhotoURL {get ; set; }
    }
}

