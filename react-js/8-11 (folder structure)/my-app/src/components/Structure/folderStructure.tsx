import React from "react";
import "../Structure/folderStructure.css";
import { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

function FolderStructure(props: any) {
  const [isFocused, setisFocused] = useState(false);
  const { folder } = props;
  console.log("folder", folder);

  return (
    <>
      <div className="verticleLine">
        <hr />{" "}
        <img
          src="https://folder-structure-9dbd4.web.app/assets/folder-open-regular.svg"
          alt=""
          className="folderImage"
        />
        <span
          className="folderName"
          onMouseEnter={() => setisFocused(true)}
          onMouseLeave={() => setisFocused(false)}
        >
          {folder}
          {isFocused && (
            <>
              <AddOutlinedIcon fontSize="small" />
              <RemoveOutlinedIcon fontSize="small"/>
            </>
          )}
        </span>
      </div>

      {/* <hr /> */}
    </>
  );
}

export default FolderStructure;
