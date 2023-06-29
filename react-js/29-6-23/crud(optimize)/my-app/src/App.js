import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/ModalForm";
import UsersList from "./components/UsersList";
import { useState } from "react";

function App() {
  const userArr = [];
  const [user, setUser] = useState(userArr);
  const [updateUser, setUpdateUser] = useState();
  const [updateIndex, setUpdateIndex] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUpdateIndex();
  };
  const handleShow = () => setShow(true);

  const userData = (formInput) => {
    if (formInput.id) {
      let matchedUserindex = user.findIndex((user) => {
        return user.id === formInput.id;
      });

      // upd_obj = Array_obj.findIndex((obj => obj.id == 0));
      user[matchedUserindex] = formInput;
      setUser([...user]);
    } else {
      setUser((prevState) => {
        return [
          ...prevState,
          { ...formInput, id: Math.ceil(Math.random() * 100) },
        ];
      });
    }
  };

  const usersAfterDelete = (remUsers) => {
    setUser((prevState) => {
      return [...remUsers];
    });
  };

  const updateUserHandler = (userToBeUpdate, index) => {
    setUpdateUser(userToBeUpdate);
    setUpdateIndex(index + 1);
  };

  return (
    <>
      <Modal
        userData={userData}
        updateUser={updateUser}
        index={updateIndex}
        setIndex={setUpdateIndex}
        handleClose={handleClose}
        handleShow={handleShow}
        modelState={show}
      />
      {user.length < 1 && (
        <h2 style={{ textAlign: "center" }}>No Users Found</h2>
      )}
      {user.length >= 1 && (
        <UsersList
          users={user}
          usersAfterDelete={usersAfterDelete}
          updateUserHandler={updateUserHandler}
          handleClose={handleClose}
          handleShow={handleShow}
        />
      )}
    </>
  );
}

export default App;
