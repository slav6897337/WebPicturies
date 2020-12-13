using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web.Helpers;
using WebPictures.Logic.Interfaces;

namespace WebPictures.Logic.Services
{
    public class GetNameFoldersService : IGetNameFoldersService
    {
        private readonly string directoryName = "ClientApp/public/Pictures";
        public string GetNameFolders()
        {
            var category = Directory.EnumerateDirectories(directoryName);
            List<string> newCategory = new List<string>();
            foreach (var item in category)
            {
                newCategory.Add( item.Replace("ClientApp/public/Pictures\\", ""));
            }
            string result = JsonConvert.SerializeObject(newCategory);
            return result;
        }

        public string GetPictures(string category)
        {
            string adres = directoryName + "/" + category;
            var pictures = Directory.GetFiles(adres);
            Random rnd = new Random();
            int count = rnd.Next(1, pictures.Length);

            if (count < pictures.Length)
            {                
                List<string> pictersLess = new List<string>();
                while (count > 0)
                {
                    int num = rnd.Next(0, pictures.Length - 1);
                    var picture = pictures.Skip(num).First().Replace("ClientApp/public/", "");

                    if (!pictersLess.Contains(picture))
                    {
                        pictersLess.Add(picture);
                        count--;
                    }                    
                }
                string result = JsonConvert.SerializeObject(pictersLess);
                return result;
            }

            string resultTwo = JsonConvert.SerializeObject(pictures);
            return resultTwo;
        }
    }
}
