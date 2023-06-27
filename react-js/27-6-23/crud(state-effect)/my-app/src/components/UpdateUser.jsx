import React, { useState } from "react";

function UpdateUser(props) {
  console.log("update", props.finalUpdateUser);

  const [updateInput, setupdateInput] = useState({
    username: props.finalUpdateUser.username,
    email: props.finalUpdateUser.email,
    password: props.finalUpdateUser.password,
  });

  const updateFormHandler = (e) => {
    e.preventDefault();
    props.updatedData(updateInput);
  };

  const usernameHandler = (e) => {
    console.log(e.target.value);
    setupdateInput((prevState) => {
      return {
        ...prevState,
        username: e.target.value,
      };
    });
  };

  const emailHandler = (e) => {
    console.log(e.target.value);
    setupdateInput((prevState) => {
      return {
        ...prevState,
        email: e.target.value,
      };
    });
  };

  const passwordHandler = (e) => {
    console.log(e.target.value);
    setupdateInput((prevState) => {
      return {
        ...prevState,
        password: e.target.value,
      };
    });
  };

  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="updateModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="container">
              <form onSubmit={updateFormHandler}>
                <h3 className="text-center">Update User</h3>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    aria-describedby="username"
                    placeholder="Enter username"
                    value={updateInput.username}
                    onChange={usernameHandler}
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
                    value={updateInput.email}
                    onChange={emailHandler}
                    required
                  />
                  {/* <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small> */}
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={updateInput.password}
                    onChange={passwordHandler}
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
                    //   data-dismiss="modal"
                  >
                    Update
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

export default UpdateUser;
