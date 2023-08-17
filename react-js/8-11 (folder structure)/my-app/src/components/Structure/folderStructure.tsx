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

  const dispatch = useDispatch();
  const isFileClicked = useSelector((state: any) => state.isFileClicked);
  const isFolderClicked = useSelector((state: any) => state.isFolderClicked);
  const { folder, folderId, isFile } = props;

  const isClickedRight = useSelector(
    (state: any) => state.isClickedRightForNested
  );

  const isClickedRightWithId = useSelector(
    (state: any) => state.isClickedRightForNestedWithId
  );

 
  const matchedFolder = folderId === isClickedRightWithId;


  const clickedFolder = useSelector((state: any) => state.clickedFolder);

  const checkClickHandler = (folder: any) => {
    let tempClickedObj = {
      name: folder,
      id: folderId,
    };

    let obj = {
      isClicked: true,
      id: folderId,
    };
    dispatch({ type: "setIsClickedRightInNested", value: obj });
    dispatch({ type: "clickedFolderName", value: tempClickedObj });
  };

  const cancelClickHandler = () => {

    let tempRemove = {
      name: folder,
      id: folderId,
    };

    dispatch({ type: "setRemoveFolder", value: tempRemove });
  };


  return (
    <>
      <div className="verticleLine">
        <div className="horizontalEle">
          <hr />

          {isFile ? (
            <img
              src="https://folder-structure-9dbd4.web.app/assets/file-regular.svg"
              alt=""
              className="folderImage"
            />
          ) : (
            <img
              src="https://folder-structure-9dbd4.web.app/assets/folder-open-regular.svg"
              alt=""
              className="folderImage"
            />
          )}

          <span
            className="folderName"
            onMouseEnter={() => setisFocused(true)}
            onMouseLeave={() => setisFocused(false)}
          >
            {folder}
            {isFocused && isFile && (
              <RemoveOutlinedIcon
                fontSize="small"
                className="cancelButton"
                onClick={cancelClickHandler}
              />
            )}

            {isFocused && !isFile && (
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

      {isClickedRight && matchedFolder && <NestedFolderStructure />}

      {/* <hr /> */}
    </>
  );
}

export default FolderStructure;
