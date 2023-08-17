import React, { useState } from "react";
// import "/nestedFolderStructure.scss";
// import './nestedFolderStructure.scss'
import "../NestedFolderStructure/nestedFolderStructure.scss";
import FileStructure from "../fileStructure";
import Form from "../../Form/Form";
import { useDispatch, useSelector } from "react-redux";

function NestedFolderStructure() {
  //   const [isFolderClicked, setisFolderClicked] = useState(false);
  //   const [isFileClicked, setisFileClicked] = useState(false);

  const dispatch = useDispatch();
  const isFileClicked = useSelector((state) => state.isFileClicked);
  const isFolderClicked = useSelector((state) => state.isFolderClicked);

  const fileClickHandler = () => {
    // setisFileClicked(true);
    dispatch({ type: "fileClicked", value: true });
  };
  const folderClickHandler = () => {
    // setisFolderClicked(true);
    dispatch({ type: "folderClicked", value: true });
  };

  return (
    <div className="verticleLineForNested">
      <div className="horizontalEleForNested">
        <hr />{" "}
        {!isFileClicked && !isFolderClicked && (
          <>
            <button type="submit" onClick={fileClickHandler}>
              File
            </button>
            <button type="submit" onClick={folderClickHandler}>
              Folder
            </button>
          </>
        )}
        {(isFileClicked || isFolderClicked) && <Form />}
        {/* {isFolderClicked && <Form />} */}
      </div>
    </div>
  );
}

export default NestedFolderStructure;
