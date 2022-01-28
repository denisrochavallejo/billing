using System;
using System.ComponentModel.DataAnnotations;

namespace BasicBilling.API
{
    public class Bill
    {
        [Key]
        public int Id { get; set; }

        public string Service { get; set; }        

        public string Period { get; set; }

        public Bill()
        {

        }
    }
}
