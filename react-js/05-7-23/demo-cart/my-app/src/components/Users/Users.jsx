import React, { useEffect } from "react";
import Modal from "../Users/ModalForm";
import UsersList from "../Users/UsersList";
import { useState } from "react";

function Users() {
  const [user, setUser] = useState([]);
  const [updateUser, setUpdateUser] = useState();
  const [updateIndex, setUpdateIndex] = useState();
  const [show, setShow] = useState(false);
  console.log();

  useEffect(() => {
    if (user.length > 0) {
      localStorage.setItem("Users", JSON.stringify(user));
    }
  }, [user]);

 
  useEffect(() => {
    if (localStorage.getItem("Users")) {
      let usersfromstoragestr = localStorage.getItem("Users");
      let usersfromstorage = JSON.parse(usersfromstoragestr);
      setUser([...usersfromstorage]);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    setUpdateIndex();
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        user={user}
        setUserState={setUser}
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
          setUserState={setUser}
          handleShow={handleShow}
          setUpdateUser={setUpdateUser}
          setUpdateIndex={setUpdateIndex}
        />
      )}
    </>
  );
}

export default Users;
