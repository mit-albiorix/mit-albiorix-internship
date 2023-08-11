import React, { useState } from "react";
import "../Form/Form.css";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useDispatch } from "react-redux/es/exports";

function Form(props: any) {
  const { setisopenForm } = props;
  const [inputName, setInputName] = useState<any>("");

  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    setInputName(e.target.value);
  };

  const handleRight = () => {
    console.log("right");
    console.log(inputName);

    // setFolders([...folders, inputName]);
    dispatch({ type: "addfolders", value: inputName });
    setisopenForm(false);
    setInputName("");
  };

  const handleCancel = () => {
    console.log("cancel");
    setisopenForm(false);
  };

  return (
    <>
      <div className="folderContainer">
        <form className="folderForm">
          <img
            src="https://folder-structure-9dbd4.web.app/assets/folder-open-regular.svg"
            alt=""
            className="folderImg"
          />
          <input
            type="text"
            className="inputForFolder"
            value={inputName}
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
