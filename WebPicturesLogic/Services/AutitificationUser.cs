using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebPictures.Logic.Interfaces;
using WebPicturesUser.Data.UserContextDB;

namespace WebPictures.Logic.Services
{
    class AutitificationUser 
    {
        private readonly UserContext _context;
        public AutitificationUser(UserContext context)
        {
            _context = context;
        }
        public bool Autintification(string name, string password)
        {
            if (_context.Users.Any(u => u.Name == name))
                if (_context.Users.Where(u => u.Name == name).First().Password == password)
                    return true;
                
            return false;
        }
    }
}
