import React from "react";
import { useState } from "react";

function Modal(props) {
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const formHandler = (event) => {
    event.preventDefault();
    console.log("form submittted ");
    props.userData(formInput);
    setFormInput({
        username: "",
        email: "",
        password: "",
      })
    //   alert("User added successfull")
  };

  const usernameHandler = (e) => {
    console.log(e.target.value);
    setFormInput((prevState) => {
      return {
        ...prevState,
        username: e.target.value,
      };
    });
  };

  const emailHandler = (e) => {
    console.log(e.target.value);
    setFormInput((prevState) => {
      return {
        ...prevState,
        email: e.target.value,
      };
    });
  };

  const passwordHandler = (e) => {
    console.log(e.target.value);
    setFormInput((prevState) => {
      return {
        ...prevState,
        password: e.target.value,
      };
    });
  };

  return (
    <>
      {/* Button trigger modal  */}
      <div className="container mt-4">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add User
        </button>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="container">
              <form onSubmit={formHandler}>
                <h3 className="text-center">Add User</h3>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    aria-describedby="username"
                    placeholder="Enter username"
                    value={formInput.username}
                    onChange={usernameHandler}
                    // onChange={(e)=>{setFormInput((prevState)=>{return (...prevState,username =e.target.value)})}}
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
                    onChange={emailHandler}
                    // onChange={(e)=>{setFormInput((prevState)=>{[...prevState,email =e.target.value]})}}
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
                    onChange={passwordHandler}
                    // onChange={(e)=>{setFormInput((prevState)=>{[...prevState,password =e.target.value]})}}
                    required
                  />
                </div>
                {/* <div>
                  <input type="checkbox" onclick="showPassword()" />
                  <strong>Show Password</strong>
                </div> */}
                <div>
                <button
                type="button"
                className="btn btn-secondary float-right mr-2"
                data-dismiss="modal"
              >
                Close
              </button>
                <button
                  type="submit"
                  className="btn btn-success float-right mr-2"
                  id="submitbtn"
                    // data-dismiss="modal"
                >
                  Submit
                </button>

                </div>
               
              </form>
            </div>
        
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
