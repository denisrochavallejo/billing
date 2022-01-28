using System;
using System.ComponentModel.DataAnnotations;

namespace BasicBilling.API
{
    public class Service
    {
        [Key]
        public int? Id { get; set; }

        public string Category{ get; set; }        

        public Service ()
        {

        }
    }
}
