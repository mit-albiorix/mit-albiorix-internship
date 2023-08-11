import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form/Form";
import FolderStructure from "./components/Structure/folderStructure";
import FileStructure from "./components/Structure/fileStructure";
import Folders from "./components/ShowFolders/Folders";

function App() {
  const [isopenForm, setisopenForm] = useState<boolean>(false);

  const handleClickForAddFolder = () => {
    setisopenForm(true);
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
      <Folders />
      {isopenForm && <Form setisopenForm={setisopenForm} />}

      {/* <FolderStructure folders={folders} /> */}
      {/* <FileStructure /> */}
    </>
  );
}

export default App;
