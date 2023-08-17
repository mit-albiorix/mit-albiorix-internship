import "./App.scss";
import Form from "./components/Form/Form";
import Folders from "./components/ShowFolders/Folders";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const foldersdata = useSelector((state: any) => state.folders);

  const isFormOpen = useSelector((state: any) => state.isFormOpen);

  const handleClickForAddFolder = () => {
    dispatch({ type: "setisFormOpen", value: true });

    dispatch({ type: "isRootClicked", value: true });
  };

  ("isformopen in app start");

  return (
    <>
      <h1 className="header">Folder Structure</h1>
      <button
        className="rootButton"
        type="submit"
        onClick={handleClickForAddFolder}
      >
        Add folder to root
      </button>
      <Folders foldersdata={foldersdata} />

      {isFormOpen && <Form />}
    </>
  );
}

export default App;
