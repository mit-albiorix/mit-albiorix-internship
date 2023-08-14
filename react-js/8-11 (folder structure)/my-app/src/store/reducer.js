import { createStore } from "redux";

const initialState = {
  folders: [],
  isFolderClicked: false,
  isFileClicked: false,
  clickedFolder: "",
  isRootClicked: false,
  isFormOpen: false,
  isClickedRightForNested: false,
};
const folderReducer = (state = initialState, action) => {
  if (action.type === "addfolders") {
    let temp;
    console.log("clikedinreducer", state.clickedFolder);
    if (state.isRootClicked) {
      //   temp = [...state.products];
      console.log("first");
      console.log("obj", action.value);
      temp = [...state.folders, action.value];
    } else {
      console.log("debug", state.folders);
      console.log("debug clicked", state.clickedFolder);
      console.log("debug value", action.value);

      let matchedFolderForSubRoute = state.folders.findIndex((ele) => {
        if ((ele.id === state.clickedFolder.id) === -1) {
          console.log("inside -1", ele.child);
          let matched = ele.child.findIndex((ele) => {
            return ele.id === state.clickedFolder.id;
          });
          console.log("matchedinside",matched);
          return matched;
        } else {
          return ele.id === state.clickedFolder.id;
        }
      });
      console.log("matchedlast1", matchedFolderForSubRoute);
      // if (matchedFolderForSubRoute === -1) {
      //   matchedFolderForSubRoute = state.folders.child.findIndex((ele) => {
      //     return ele.id === state.clickedFolder.id;
      //   });
      // }
      // console.log("matchedlast2", matchedFolderForSubRoute);

      temp = [...state.folders];
      temp[matchedFolderForSubRoute]?.child?.push(action.value);
      console.log("tempp", temp);
    }
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
      clickedFolder: action.value,
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
    return {
      ...state,
      isClickedRightForNested: action.value,
    };
  }
  return state;
};

const store = createStore(folderReducer);

export default store;
