function LastModifiedFile()

{

  var FolderName = "D:\\Test";

  var FolderInfo = aqFileSystem.GetFolderInfo(FolderName);

  var Num = FolderInfo.Files.Count;

  Log.Message("The folder contains " + Num + " files.")

  for (var i=0; i < Num; i++)

  {

      var FileDate = FolderInfo.Files.Item(i).DateLastModified;

      var a = new Array();

      a = FileDate;

      Log.Message(a);

      // Develop your own sorting algorithm to sort this Array

      // When you find an appropriate date (the last one)

      // You can obtain the file name using the following code

      //  FolderInfo.Files.Item(i).Path

  }

}