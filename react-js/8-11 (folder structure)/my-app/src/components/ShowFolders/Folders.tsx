
import FolderStructure from "../Structure/folderStructure";

function Folders(props: any) {
  const { foldersdata } = props;
  return (
    <>
      

      {foldersdata?.map((folder: any, index: number) => {
        return (
          <ul key={index}>
            <li style={{ listStyle: "none" }}>
              <FolderStructure folder={folder.fname} folderId={folder.id} isFile={folder.isFile}/>
              {folder.child.length > 0 && (
                <Folders foldersdata={folder.child} />
              )}
            </li>
          </ul>
        );
      })}
    </>
  );
}

export default Folders;