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
    public class ClientController : ControllerBase
    {
        private BasicBillingContext basicBillingContext { get; set; }

        private readonly ILogger<BillController> _logger;

        public ClientController(ILogger<BillController> logger, BasicBillingContext basicBillingContext)
        {
            _logger = logger;
            this.basicBillingContext = basicBillingContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Client>> Get()
        {
            return Ok(this.basicBillingContext.Clients.ToList());
        }

        [HttpPost]
        public ActionResult Add([FromBody] Client client)
        {
            this.basicBillingContext.Add(client);
            this.basicBillingContext.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        public ActionResult Delete([FromBody] Client client)
        {
            _logger.Log(LogLevel.Debug, client.Name, client);
            this.basicBillingContext.Remove(client);
            this.basicBillingContext.SaveChanges();
            return Ok();
        }

        [HttpPut]
        public ActionResult Update([FromBody] Client client)
        {
            this.basicBillingContext.Update(client);
            this.basicBillingContext.SaveChanges();
            return Ok();
        }
    }
}
