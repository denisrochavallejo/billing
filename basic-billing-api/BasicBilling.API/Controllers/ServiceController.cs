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
    public class ServiceController : ControllerBase
    {
        private BasicBillingContext basicBillingContext { get; set; }

        private readonly ILogger<BillController> _logger;

        public ServiceController(ILogger<BillController> logger, BasicBillingContext basicBillingContext)
        {
            _logger = logger;
            this.basicBillingContext = basicBillingContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Service>> Get()
        {
            return Ok(this.basicBillingContext.Services.ToList());
        }

        [HttpPost]
        public ActionResult Add([FromBody] Service service)
        {
            this.basicBillingContext.Add(service);
            this.basicBillingContext.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        public ActionResult Delete([FromBody] Service service)
        {
            _logger.Log(LogLevel.Debug, service.Category, service);
            this.basicBillingContext.Remove(service);
            this.basicBillingContext.SaveChanges();
            return Ok();
        }

        [HttpPut]
        public ActionResult Update([FromBody] Service service)
        {
            this.basicBillingContext.Update(service);
            this.basicBillingContext.SaveChanges();
            return Ok();
        }
    }
}
