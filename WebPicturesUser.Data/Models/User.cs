﻿using System;
using System.Collections.Generic;
using System.Text;

namespace WebPicturesUser.Data.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
    }
}
