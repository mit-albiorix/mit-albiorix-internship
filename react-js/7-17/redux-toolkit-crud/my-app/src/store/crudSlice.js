import { createSlice } from "@reduxjs/toolkit";

const localStorageUsers = JSON.parse(localStorage.getItem("users"));
const initialAddUserState = { users: localStorageUsers || [], editUser: {} };

const crudSlice = createSlice({
  name: "createUser",
  initialState: initialAddUserState,
  reducers: {
    addUser(state, action) {
      // let { users } = state;
      let { users } = state;
      let { payload } = action;
      console.log("add", state);

      payload.id = Math.ceil(Math.random() * 100);
      users.push(payload);

      // users = [...users,{payload,id:Math.ceil(Math.random() * 100)}]
      console.log("users", users);

      localStorage.setItem("users", JSON.stringify(state.users));
    },

    deleteUser(state, action) {
      let { users } = state;
      let { payload } = action;

      users.splice(payload.index, 1);
      localStorage.setItem("users", JSON.stringify(users));
    },

    editUsers(state, action) {
      let { editUser } = state;
      console.log("edituser", state, action);
      let { payload } = action;
      state.editUser =  payload.user ;
      console.log("edit", editUser);
    },

    updateUser(state, action) {
      let { users } = state;
      let { payload } = action;
      if (payload.id) {
        let matchedIndex = users.findIndex((user) => {
          return user.id === payload.id;
        });
        console.log("matche", matchedIndex);
        users[matchedIndex] = payload;
        state.editUser.id = 0;
      }
    },
  },
});

export default crudSlice;

export const { addUser, deleteUser, editUsers, updateUser } = crudSlice.actions;
