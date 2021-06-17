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
        public bool Organic { get; set; }
        public bool Meat { get; set; }
        public bool Eggs { get; set; }
        public bool Dairy { get; set; }
    }
}
//string Name *Required
// string Address *Required
// string City
// string Phone
// string Description
// bool Certified Organic?
// bool Meat?
// bool Eggs?
// bool Dairy?
