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
    let temp = [...state.folders];

    if (state.isRootClicked) {
      temp = [...state.folders, action.value];
    } else {
      // let matchedparent = findSubroute(allparentsarray);
      function findSubroute(foldersArray) {
        for (let i = 0; i < foldersArray?.length; i++) {
          if (foldersArray[i].id === state.clickedFolderId) {
            foldersArray[i].child.push(action.value);
            return foldersArray[i];
          } else {
            findSubroute(foldersArray[i].child);
          }
        }
      }

      let matchedparent = findSubroute(temp);
    }

    

    return {
      ...state,
      folders: [...temp],
    };
  }
  if (action.type === "setRemoveFolder") {
    let temp = [...state.folders];

    function findSubroute(foldersArray) {
      for (let i = 0; i < foldersArray?.length; i++) {
        if (foldersArray[i].id === action.value.id) {
          foldersArray.splice(i, 1);

          return temp;
        } else {
          findSubroute(foldersArray[i].child);
        }
      }
    }

    let updatedFolders = findSubroute(temp);

    return {
      ...state,
      folders: temp,
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
    let temp = {
      ...state,
      isFormOpen: action.value,
    };

    return temp;
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
