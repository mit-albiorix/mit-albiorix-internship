import React, { useState } from "react";

function UsersList(props) {
  console.log(props.users);

  // const [userToBeUpdate, setuserToBeUpdate] = useState();

  const deleteUser = (index) => {
    console.log(index);
    props.users.splice(index, 1);
    props.usersAfterDelete(props.users);
  };

  return (
    <>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Action</th>
            {/* <!-- <th scope="col">Edit</th> --> */}
          </thead>
          <tbody>
            {props.users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>

                  <td>
                    <button
                      type="button"
                      className="btn btn-danger mr-2"
                      onClick={() => {
                        deleteUser(index);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        props.handleShow();
                        props.updateUserHandler(user, index);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UsersList;
