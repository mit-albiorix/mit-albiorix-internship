import React from "react";
import "../Structure/folderStructure.scss";
import { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import NestedFolderStructure from "./NestedFolderStructure/nestedFolderStructure";
import { useDispatch, useSelector } from "react-redux";

function FolderStructure(props: any) {
  const [isFocused, setisFocused] = useState(false);

  // const [isClickedRight, setIsClickedRight] = useState(false);
  const isClickedRight = useSelector(
    (state: any) => state.isClickedRightForNested
  );
  const dispatch = useDispatch();
  const { folder, folderId } = props;

  console.log("folder", folder);

  const clickedFolder = useSelector((state: any) => state.clickedFolder);
  console.log("clicked", clickedFolder);

  const checkClickHandler = (folder: any) => {
    // setIsClickedRight(true);
    console.log("clickedfoldername", folder);
    let tempClickedObj = {
      name: folder,
      id: folderId,
    };
    dispatch({ type: "setIsClickedRightInNested", value: true });
    dispatch({ type: "clickedFolderName", value: tempClickedObj });
  };

  const cancelClickHandler = () => {
    dispatch({ type: "setIsClickedRightInNested", value: false });
  };

  console.log("folder", folder);

  return (
    <>
      <div className="verticleLine">
        <div className="horizontalEle">
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
                <AddOutlinedIcon
                  fontSize="small"
                  className="rightButton"
                  onClick={() => {
                    checkClickHandler(folder);
                  }}
                />
                <RemoveOutlinedIcon
                  fontSize="small"
                  className="cancelButton"
                  onClick={cancelClickHandler}
                />
              </>
            )}
          </span>
        </div>
      </div>

      {isClickedRight && <NestedFolderStructure />}

      {/* <hr /> */}
    </>
  );
}

export default FolderStructure;
