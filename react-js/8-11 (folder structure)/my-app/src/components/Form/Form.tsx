import React, { useState } from "react";

import "../Form/Form.scss";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { v4 as uuid } from "uuid";

function Form(props: any) {
  const [inputName, setInputName] = useState<any>({
    fname: "",
    id: null,
    parent_id: null,

    child: [],
  });
  const [errorMessage, setErrorMessage] = useState("");
  const isFileClicked = useSelector((state: any) => state.isFileClicked);

  const clickedFolderId = useSelector((state: any) => state.clickedFolderId);

  const unique_id = uuid();
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    setInputName(() => ({
      ...inputName,
      fname: e.target.value,
      id: unique_id,
      parent_id: clickedFolderId,
      isFile: isFileClicked,
    }));
  };

  const handleRight = (e: any) => {
    e.preventDefault();
    if (inputName.fname.length == 0) {
      if (isFileClicked) {
        setErrorMessage("File name is required");
      } else {
        setErrorMessage("Folder name is required");
      }
    } else {
      dispatch({ type: "addfolders", value: inputName });

      dispatch({
        type: "setIsClickedRightInNested",
        value: { isClicked: false, id: null },
      });

      setInputName("");
    }
  };

  const handleCancel = () => {
    dispatch({
      type: "setIsClickedRightInNested",
      value: { isClicked: false, id: null },
    });
  };

  return (
    <>
      {}
      <div className="folderContainer">
        <form
          className="folderForm"
          onSubmit={(e) => {
            handleRight(e);
          }}
        >
          <img
            src={
              isFileClicked
                ? "https://folder-structure-9dbd4.web.app/assets/file-regular.svg"
                : "https://folder-structure-9dbd4.web.app/assets/folder-open-regular.svg"
            }
            alt=""
            className="folderImage"
          />

          <input
            type="text"
            className="inputForFolder"
            value={inputName.fname}
            onChange={handleChange}
          />

          <CheckOutlinedIcon
            fontSize="small"
            className="rightMark"
            onClick={(e) => {
              handleRight(e);
            }}
          />
          <ClearOutlinedIcon
            fontSize="small"
            className="cancelMark"
            onClick={handleCancel}
          />
        </form>
        {errorMessage.length > 0 && (
          <span className="error">{errorMessage}</span>
        )}
      </div>
    </>
  );
}

export default Form;
