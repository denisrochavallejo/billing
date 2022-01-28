using System;
using System.ComponentModel.DataAnnotations;

namespace BasicBilling.API
{
    public class Client
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }        
    }
}
