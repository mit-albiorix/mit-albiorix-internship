import React, { useState } from "react";
// import "../Form/Form.css";
import "../Form/Form.scss";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { v4 as uuid } from "uuid";

function Form(props: any) {
  const { setisopenForm } = props;
  const [inputName, setInputName] = useState<any>({
    fname: "",
    id: null,
    child: [],
  });
  const isFileClicked = useSelector((state: any) => state.isFileClicked);
  const isFolderClicked = useSelector((state: any) => state.isFolderClicked);
  const unique_id = uuid();
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    setInputName((prev: any) => ({
      ...inputName,
      fname: e.target.value,
      id: unique_id,
    }));
  };

  const handleRight = () => {
    console.log("right");

    // setFolders([...folders, inputName]);
    dispatch({ type: "addfolders", value: inputName });
    console.log("props", props);

    dispatch({ type: "setisFormClose" });
    dispatch({ type: "fileClicked", value: false });
    dispatch({ type: "folderClicked", value: false });
    dispatch({ type: "setIsClickedRightInNested", value: false });
    dispatch({ type: "isRootClicked", value: false });
    setInputName("");
  };

  const handleCancel = () => {
    console.log("cancel");
    dispatch({ type: "setisFormClose" });
  };

  return (
    <>
      <div className="folderContainer">
        <form className="folderForm">
          {isFileClicked ? (
            <img
              src="https://folder-structure-9dbd4.web.app/assets/file-regular.svg"
              alt=""
              className="folderImg"
            />
          ) : (
            <img
              src="https://folder-structure-9dbd4.web.app/assets/folder-open-regular.svg"
              alt=""
              className="folderImg"
            />
          )}

          <input
            type="text"
            className="inputForFolder"
            value={inputName.fname}
            onChange={handleChange}
          />

          <CheckOutlinedIcon
            fontSize="small"
            className="rightMark"
            onClick={handleRight}
          />

          <ClearOutlinedIcon
            fontSize="small"
            className="cancelMark"
            onClick={handleCancel}
          />
        </form>
      </div>
    </>
  );
}

export default Form;
