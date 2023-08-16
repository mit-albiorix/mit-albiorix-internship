import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form/Form";
import FolderStructure from "./components/Structure/folderStructure";
import FileStructure from "./components/Structure/fileStructure";
import Folders from "./components/ShowFolders/Folders";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // const [isopenForm, setisopenForm] = useState<boolean>(false);
  // const [isRootClicked, setisRootClicked] = useState(false);
  const dispatch = useDispatch();
  const foldersdata = useSelector((state: any) => state.folders);
  // let finlfoldersdata = foldersdata.map();
  console.log("fol", foldersdata);
  const isFormOpen = useSelector((state: any) => state.isFormOpen);
  const handleClickForAddFolder = () => {
    // setisopenForm(true);
    dispatch({ type: "setisFormOpen" });

    dispatch({ type: "isRootClicked", value: true });
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Folder Structure
      </h1>
      <button
        type="submit"
        style={{ backgroundColor: "black", color: "white", marginLeft: "10px" }}
        onClick={handleClickForAddFolder}
      >
        Add folder to root
      </button>
      <Folders foldersdata={foldersdata} />
      {isFormOpen && <Form />}

      {/* <FolderStructure folders={folders} /> */}
      {/* <FileStructure /> */}
    </>
  );
}

export default App;
