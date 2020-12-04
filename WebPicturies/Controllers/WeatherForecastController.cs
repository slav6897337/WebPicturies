using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebPictures.Logic.Interfaces;

namespace WebPicturies.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IGetNameFoldersService _getNameFoldersService;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IGetNameFoldersService getNameFoldersService)
        {
            _logger = logger;
            _getNameFoldersService = getNameFoldersService;
        }

        [HttpGet]
        public IEnumerable<string> Get(string category, int count)
        {
            if (count != 0 && !string.IsNullOrEmpty(category))
                return _getNameFoldersService.GetPictures(category, count);

            return _getNameFoldersService.GetNameFolders();
        }
    }
}
