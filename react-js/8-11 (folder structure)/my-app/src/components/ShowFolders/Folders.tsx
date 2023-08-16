import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import FolderStructure from "../Structure/folderStructure";

function Folders(props: any) {
  const { foldersdata } = props;
  return (
    <>
      {console.log("final", foldersdata)}

      {foldersdata?.map((folder: any, index: number) => {
        return (
          <ul key={index}>
            <li style={{ listStyle: "none" }}>
              <FolderStructure folder={folder.fname} folderId={folder.id} />
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
