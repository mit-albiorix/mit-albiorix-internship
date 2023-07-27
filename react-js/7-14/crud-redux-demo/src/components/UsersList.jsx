import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "./Search";

function UsersList() {
  const users = useSelector((state) => state.users);
  const searchedUsers = useSelector((state) => state.searchedUsers);
  console.log("seacreduser", searchedUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("in list", users);
  }, [users]);

  const deleteHandler = (user, index) => {
    dispatch({ type: "deleteUser", value: index });
  };

  const editHandler = (user, index) => {
    let userAndIndex = { user: user, index: index };
    dispatch({ type: "editUser", value: { userAndIndex } });
  };

  return (
    <>
      <Search />
      {users?.length > 0 && searchedUsers.length === 0 && (
        <div className="container mt-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Password</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.password}</td>
                    <td>
                      <button
                        onClick={() => {
                          deleteHandler(user, index);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          editHandler(user, index);
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
      )}

      {users?.length > 0 && searchedUsers.length > 0 && (
        <div className="container mt-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Password</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {searchedUsers.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.password}</td>
                    <td>
                      <button
                        onClick={() => {
                          deleteHandler(user, index);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          editHandler(user, index);
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
      )}

      {users?.length === 0 && (
        <p className="mt-5" style={{ textAlign: "center" }}>
          Users not found!
        </p>
      )}
    </>
  );
}

export default UsersList;
