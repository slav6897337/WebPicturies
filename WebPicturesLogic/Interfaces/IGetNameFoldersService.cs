using System.Collections.Generic;

namespace WebPictures.Logic.Interfaces
{
    public interface IGetNameFoldersService
    {
        IEnumerable<string> GetNameFolders();
        IEnumerable<string> GetPictures(string category, int count);
    }
}
