// import { match } from "assert";
// import { match } from "assert";
import { createStore } from "redux";

const initialState = {
  folders: [],
  isFolderClicked: false,
  isFileClicked: false,
  clickedFolder: "",
  clickedFolderId: null,
  isRootClicked: false,
  isFormOpen: false,
  isClickedRightForNested: false,
  isClickedRightForNestedWithId: null,
};
const folderReducer = (state = initialState, action) => {
  if (action.type === "addfolders") {
    console.log("clikedinreducer", state.clickedFolder);
    let temp = [...state.folders];
    let allparentsarray = temp?.filter((ele) => ele.parent_id === null);
    console.log("parent", allparentsarray);

    if (state.isRootClicked) {
      //   temp = [...state.products];
      console.log("first");
      console.log("obj", action.value);
      temp = [...state.folders, action.value];
    } else {
      console.log("matchedparent 1");

      // let matchedparent = findSubroute(allparentsarray);
      function findSubroute(foldersArray) {
        console.log("matchedparent 2", foldersArray);

        for (let i = 0; i < foldersArray?.length; i++) {
          console.log("matchedparent ele", foldersArray[i]);
          console.log("helloji");
          console.log(
            "matchedparent 4",
            foldersArray[i].id,
            state.clickedFolderId
          );
          if (foldersArray[i].id === state.clickedFolderId) {
            console.log("matchedparent parent", foldersArray[i]);
            foldersArray[i].child.push(action.value);
            return foldersArray[i];
          } else {
            findSubroute(foldersArray[i].child);
          }
        }
      }
      console.log("matchedparent 3", allparentsarray);
      let matchedparent = findSubroute(allparentsarray);
      console.log("matchedparent", matchedparent);
    }

    // temp = [...state.folders];
    console.log("parent temp", temp);

    return {
      ...state,
      folders: [...temp],
    };
  }
  if (action.type === "fileClicked") {
    return {
      ...state,
      isFileClicked: action.value,
    };
  }
  if (action.type === "folderClicked") {
    return {
      ...state,
      isFolderClicked: action.value,
    };
  }

  if (action.type === "clickedFolderName") {
    console.log("debug clicked", action.value);
    return {
      ...state,
      clickedFolder: action.value.name,
      clickedFolderId: action.value.id,
    };
  }

  if (action.type === "isRootClicked") {
    return {
      ...state,
      isRootClicked: action.value,
    };
  }
  if (action.type === "setisFormOpen") {
    return {
      ...state,
      isFormOpen: true,
    };
  }

  if (action.type === "setisFormClose") {
    return {
      ...state,
      isFormOpen: false,
    };
  }

  if (action.type === "setIsClickedRightInNested") {
    // let tempfoldersdata = [...state.folders]
    // tempfoldersdata = [...tempfoldersdata,isClickedRightForNested]
    return {
      ...state,
      isClickedRightForNested: action.value.isClicked,
      isClickedRightForNestedWithId: action.value.id,
    };
  }
  return state;
};

const store = createStore(folderReducer);

export default store;
