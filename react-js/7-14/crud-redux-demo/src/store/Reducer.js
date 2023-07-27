import { createStore } from "redux";

const usersFromStoragestr = localStorage.getItem("users");
const usersFromStorage = JSON.parse(usersFromStoragestr);

const initialState = {
  users: usersFromStorage || [],
  edituser: {},
  
};
const reducerFunc = (state = initialState, action) => {
  let temp = [];
  if (action.type === "addUser") {
    console.log("id", action.value);

    if (action.value.id) {
      console.log("update", action.value);
      let updateuser = action.value;
      temp = state.users;
      console.log("olduser", temp);
      console.log("update", updateuser);

      let matchedProduct = temp.filter((ele) => {
        return ele.id === updateuser.id;
      });
      console.log("matchedpro", matchedProduct);
      let matchedindex = temp.findIndex((ele) => {
        return ele.id === updateuser.id;
      });
      console.log("matchedindexx", matchedindex);
      temp[matchedindex] = updateuser;
      // temp[matchedindex].id = 0;
    } else {
      temp = [
        ...state.users,
        { ...action.value, id: Math.ceil(Math.random() * 100) },
      ];
    }
    localStorage.setItem("users", JSON.stringify(temp));
    return {
      ...state,
      users: [...temp],
      edituser: {},
    };

    // console.log("users", temp);
  }

  if (action.type === "deleteUser") {
    let temp = state.users;
    // temp.splice(action.value, 1);
    console.clear();
console.log("temp",temp);
    let matchedindex =temp.findIndex((user)=>{
      return user.id === action.value.id
    })
    console.log("matchedindex",matchedindex);

    temp.splice(matchedindex,1)
    // let updatedData = temp.filter((user)=>{
    //   return 
    // })

    localStorage.setItem("users", JSON.stringify(temp));
    console.log("deleted", temp);
    return {
      ...state,
      users: [...temp],
    };
  }

  if (action.type === "editUser") {
    console.log("action", action.value);
    // console.log("edituser", edituser);
    let tempedituser = action.value.userAndIndex.user;
    return {
      ...state,
      edituser: tempedituser,
    };
  }
 
  return state;
};

const store = createStore(reducerFunc);

export default store;
