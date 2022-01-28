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
    public class BillingController : ControllerBase
    {
        private BasicBillingContext basicBillingContext { get; set; }

        private readonly ILogger<BillingController> _logger;

        public BillingController(ILogger<BillingController> logger, BasicBillingContext basicBillingContext)
        {
            _logger = logger;
            this.basicBillingContext = basicBillingContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Billing>> Get()
        {
            return Ok(this.basicBillingContext.Billings.ToList());
        }

        [HttpPost]
        public ActionResult Add([FromBody] Billing billing)
        {
            this.basicBillingContext.Add(billing);
            this.basicBillingContext.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        public ActionResult Delete([FromBody] Billing billing)
        {
            this.basicBillingContext.Remove(billing);
            this.basicBillingContext.SaveChanges();
            return Ok();
        }

        [HttpPut]
        public ActionResult Update([FromBody] Billing billing)
        {
            this.basicBillingContext.Update(billing);
            this.basicBillingContext.SaveChanges();
            return Ok();
        }
    }
}
