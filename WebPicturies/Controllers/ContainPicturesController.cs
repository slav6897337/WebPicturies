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
    public class ContainPicturesController : ControllerBase
    {
        private readonly ILogger<ContainPicturesController> _logger;
        private readonly IGetNameFoldersService _getNameFoldersService;

        public ContainPicturesController(ILogger<ContainPicturesController> logger, IGetNameFoldersService getNameFoldersService)
        {
            _logger = logger;
            _getNameFoldersService = getNameFoldersService;
        }

        [HttpGet]
        public string Get(string category)
        {
            if (!string.IsNullOrEmpty(category))
                return _getNameFoldersService.GetPictures(category);
            return _getNameFoldersService.GetNameFolders();
        }
    }
}
