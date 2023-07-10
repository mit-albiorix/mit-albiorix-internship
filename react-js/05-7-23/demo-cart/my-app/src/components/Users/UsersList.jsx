import React, { useEffect, useState } from "react";

function UsersList({
  users,
  setUserState,
  setUpdateUser,
  setUpdateIndex,
  handleShow,
}) {
  const [usersFromStorage, setUsersFromStorage] = useState([]);

  useEffect(() => {
    setUsersFromStorage([...users]);
  }, [users]);

  // delete user;

  const deleteUser = (index) => {
    users.splice(index, 1);
    setUserState([...users]);
    console.log("delete",users);
    localStorage.setItem('Users',users)
  };

  return (
    <>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {usersFromStorage &&
              usersFromStorage.map((user, index) => {
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
                          handleShow();
                          setUpdateUser(user);
                          setUpdateIndex(index + 1);
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
