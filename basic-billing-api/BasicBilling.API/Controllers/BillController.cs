using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BasicBilling.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BillController : ControllerBase
    {
        private BasicBillingContext basicBillingContext { get; set; }

        private readonly ILogger<BillController> _logger;

        public BillController(ILogger<BillController> logger, BasicBillingContext basicBillingContext)
        {
            _logger = logger;
            this.basicBillingContext = basicBillingContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Bill>> Get()
        {
            return Ok(this.basicBillingContext.Bills.ToList());
        }

        [HttpPost]
        public ActionResult Add([FromBody] Bill bill)
        {
            this.basicBillingContext.Add(bill);
            foreach (Client client in this.basicBillingContext.Clients)
            {
                Billing billing = new Billing() { 
                        Client = client.Name, 
                        Service = bill.Service, 
                        Period = bill.Period, 
                        Status = "PENDING" };
                this.basicBillingContext.Add(billing);
            }
            this.basicBillingContext.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        public ActionResult Delete([FromBody] Bill bill)
        {
            this.basicBillingContext.Remove(bill);
            this.basicBillingContext.SaveChanges();
            return Ok();
        }

        [HttpPut]
        public ActionResult Update([FromBody] Bill bill)
        {
            this.basicBillingContext.Update(bill);
            this.basicBillingContext.SaveChanges();
            return Ok();
        }
    }
}
