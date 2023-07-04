import React, { useEffect } from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import './ModalForm.css'

function ModalForm({
  user,
  handleClose,
  handleShow,
  setIndex,
  setUserState,
  updateUser,
  index,
  modelState,
}) {
  // input state
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  // useeffect to get the value back for edit
  useEffect(() => {
    if (index) {
      setFormInput({
        username: updateUser.username,
        email: updateUser.email,
        password: updateUser.password,
        id: updateUser.id,
      });
    }
  }, [index]);

  // handler for input fields
  const inputHandler = (e) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  //for add users and update users
  const formHandler = (event) => {
    event.preventDefault();
    if (formInput.id) {
      let matchedUserindex = user.findIndex((user) => {
        return user.id === formInput.id;
      });

      user[matchedUserindex] = formInput;
      setUserState([...user]);
    } else {
      setUserState((prevState) => {
        return [
          ...prevState,
          { ...formInput, id: Math.ceil(Math.random() * 100) },
        ];
      });
    }

    setFormInput({
      username: "",
      email: "",
      password: "",
    });
  };

  // resetform
  const resetForm = () => {
    setFormInput({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container mt-4">
        <Button
          type="button"
          className="btn btn-primary"
          variant="primary"
          onClick={() => {
            setIndex(0);
            handleShow();
          }}
        >
          Add User
        </Button>
      </div>

      <Modal
      className="Modal"
        show={modelState}
        onHide={() => {
          handleClose();
          resetForm();
        }}
        backdrop="static"
        keyboard={false}
        style={{zIndex : "100001 !important"}}
      >
        <Modal.Header closeButton>
          <Modal.Title>{!index ? "Add User" : "Update User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form onSubmit={formHandler}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="username"
                  placeholder="Enter username"
                  name="username"
                  value={formInput.username}
                  onChange={inputHandler}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                  value={formInput.email}
                  onChange={inputHandler}
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  name="password"
                  value={formInput.password}
                  onChange={inputHandler}
                  required
                />
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-secondary float-right mr-2"
                  onClick={() => {
                    handleClose();
                    resetForm();
                  }}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-success float-right mr-2"
                  id="submitbtn"
                  onClick={handleClose}
                >
                  {!index ? "Submit" : "Update"}
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;
