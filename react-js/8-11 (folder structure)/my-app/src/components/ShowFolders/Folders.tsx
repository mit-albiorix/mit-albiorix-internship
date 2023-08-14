import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import FolderStructure from "../Structure/folderStructure";

function Folders() {
  const folders = useSelector((state: any) => state.folders);
  console.log("fol", folders);

  return (
    <>
      {folders?.map((folder: any, index: number) => {
        return (
          <ul key={index}>
            <li style={{ listStyle: "none" }}>
              <FolderStructure folder={folder.fname} folderId={folder.id} />
              {folder.child.length > 0 &&
                folder.child?.map((childItem: any) => {
                  return (
                    <ul key={index}>
                      <li style={{listStyle:"none"}}>
                        <FolderStructure
                          folder={childItem.fname}
                          folderId={childItem.id}
                        />
                      </li>
                    </ul>
                  );
                })}
            </li>
          </ul>
        );
      })}
    </>
  );
}

export default Folders;
