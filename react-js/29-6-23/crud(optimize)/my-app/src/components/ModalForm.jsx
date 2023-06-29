import React, { useEffect } from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ModalForm(props) {
  const [formInput, setFormInput] = useState({
    // id : 0,
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (props.index) {
      setFormInput({
        // id : props.updateUser.id,
        username: props.updateUser.username,
        email: props.updateUser.email,
        password: props.updateUser.password,
        id: props.updateUser.id,
      });
    }
  }, [props.index]);

  const formHandler = (event) => {
    event.preventDefault();
    console.log("form submittted ");
    props.userData(formInput);
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
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form onSubmit={formHandler}>
              <h3 className="text-center">
                {!props.index ? "Add User" : "Update User"}
              </h3>
              <div className="form-group">
                {/* <input type="number" value={formInput.id+=1}  disabled/> */}
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="username"
                  placeholder="Enter username"
                  value={formInput.username}
                  // onChange={usernameHandler}
                  onChange={(e) => {
                    setFormInput((prevState) => {
                      return { ...prevState, username: e.target.value };
                    });
                  }}
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
                  value={formInput.email}
                  // onChange={emailHandler}
                  onChange={(e) => {
                    setFormInput((prevState) => {
                      return { ...prevState, email: e.target.value };
                    });
                  }}
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
                  value={formInput.password}
                  // onChange={passwordHandler}
                  onChange={(e) => {
                    setFormInput((prevState) => {
                      return { ...prevState, password: e.target.value };
                    });
                  }}
                  required
                />
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-secondary float-right mr-2"
                  onClick={props.handleClose}
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
