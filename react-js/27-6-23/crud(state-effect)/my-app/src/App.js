import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";
import UsersList from "./components/UsersList";
import { useState } from "react";
import UpdateUser from "./components/UpdateUser";

function App() {
  const userArr = [];
  const [user, setUser] = useState(userArr);
  const [newUser, setNewUser] = useState([]);
  const [finalUpdateUser, setUpdateUser] = useState();
  const [updateIndex, setUpdateIndex] = useState(0);

  const userData = (formInput) => {
    setUser((prevState) => {
      return [...prevState, formInput];
    });
  };

  const usersAfterDelete = (remUsers) => {
    console.log("remusers", remUsers);

    setUser((prevState) => {
      return [...remUsers];
    });
    console.log(user.length);
  };

  const updateUser = (updateUserData, index) => {
    setUpdateUser(updateUserData);
    setUpdateIndex(index);
  };

  const updatedUserData = (updatedData) => {
    console.log(user);
    console.log(updateIndex);
    setNewUser(() => {
      return [...user];
    });
    console.log("newuser", newUser);
    newUser.splice(updateIndex, 1, updatedData);
    setUser(() => {
      return [...newUser];
    });
    
    console.log("finalupdateddusers", user);
  };

  return (
    <>
      <Modal userData={userData} />
      {user.length < 1 && (
        <h2 style={{ textAlign: "center" }}>No Users Found</h2>
      )}
      {user.length >= 1 && (
        <UsersList
          users={user}
          usersAfterDelete={usersAfterDelete}
          updateUser={updateUser}
        />
      )}
      {finalUpdateUser && (
        <UpdateUser
          finalUpdateUser={finalUpdateUser}
          updatedData={updatedUserData}
          
        />
      )}
    </>
  );
}

export default App;
