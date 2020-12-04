using System.Collections.Generic;

namespace WebPicturesLogic.Interfaces
{
    public interface IGetNameFoldersService
    {
        IEnumerable<string> GetNameFolders();
        IEnumerable<string> GetPictures(string category, int count);
    }
}
