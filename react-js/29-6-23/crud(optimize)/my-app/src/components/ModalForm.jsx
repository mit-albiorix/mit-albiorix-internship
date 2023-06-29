import React, { useEffect } from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ModalForm(props) {
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (props.index) {
      setFormInput({
        username: props.updateUser.username,
        email: props.updateUser.email,
        password: props.updateUser.password,
        id: props.updateUser.id,
      });
    }
  }, [props.index]);

  const inputHandler = (e) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const formHandler = (event) => {
    event.preventDefault();

    props.userData(formInput);
    setFormInput({
      username: "",
      email: "",
      password: "",
    });
  };

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
            props.setIndex(0);
            props.handleShow();
          }}
        >
          Add User
        </Button>
      </div>

      <Modal
        show={props.modelState}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{!props.index ? "Add User" : "Update User"}</Modal.Title>
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
                    props.handleClose(), resetForm();
                  }}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-success float-right mr-2"
                  id="submitbtn"
                  onClick={props.handleClose}
                >
                  {!props.index ? "Submit" : "Update"}
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
