using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using WebPicturesLogic.Interfaces;

namespace WebPicturesLogic.Services
{
    public class GetNameFoldersService : IGetNameFoldersService
    {
        private readonly string directoryName = "Pictures";
        public IEnumerable<string> GetNameFolders() => Directory.GetDirectories(directoryName);      

        public IEnumerable<string> GetPictures(string category, int count)
        {
            string adres = directoryName + "/" + category;
            var pictures = Directory.GetFiles(adres);

            if (count < pictures.Length)
            {
                Random rnd = new Random();
                List<string> pictersLess = new List<string>();
                while (count > 0)
                {
                    int num = rnd.Next(0, pictures.Length - 1);
                    var picture = pictures.Skip(num).First();

                    if (!pictersLess.Contains(picture))
                    {
                        pictersLess.Add(picture);
                        count--;
                    }                    
                }
                return pictersLess;
            }
           
            return pictures;
        }
    }
}
