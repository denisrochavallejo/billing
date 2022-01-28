using System;
using System.ComponentModel.DataAnnotations;

namespace BasicBilling.API
{
    public class Billing
    {
        [Key]
        public int Id { get; set; }

        public string Service { get; set; }        

        public string Period { get; set; }

        public string Status { get; set; }

        public string Client { get; set; }

    }
}
