import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";
import UsersList from "./components/UsersList";
import { useState } from "react";

function App() {
  const userArr = [];
  const [user, setUser] = useState(userArr);
  const [updateUser, setUpdateUser] = useState();
  const [updateIndex, setUpdateIndex] = useState();

  const userData = (formInput) => {
    if (formInput.id) {
      console.log("userid", formInput.id);
      let matchedUserindex = user.findIndex((user) => {
        return user.id === formInput.id;
      });
      console.log("matched", matchedUserindex);
      
      // upd_obj = Array_obj.findIndex((obj => obj.id == 0));
      user[matchedUserindex] = formInput;
      setUser([...user])
      
    
    } else {
      setUser((prevState) => {
        return [
          ...prevState,
          { ...formInput, id: Math.ceil(Math.random() * 100) },
        ];
      });
    }
  };

  console.log("in users", user);

  const usersAfterDelete = (remUsers) => {
    console.log("remusers", remUsers);

    setUser((prevState) => {
      return [...remUsers];
    });
    console.log(user.length);
  };

  const updateUserHandler = (userToBeUpdate, index) => {
    setUpdateUser(userToBeUpdate);
    setUpdateIndex(index + 1);

    console.log("in app update user");
    console.log(updateUser);
  };

  return (
    <>
      <Modal userData={userData} updateUser={updateUser} index={updateIndex} />
      {user.length < 1 && (
        <h2 style={{ textAlign: "center" }}>No Users Found</h2>
      )}
      {user.length >= 1 && (
        <UsersList
          users={user}
          usersAfterDelete={usersAfterDelete}
          updateUserHandler={updateUserHandler}
        />
      )}
    </>
  );
}

export default App;
