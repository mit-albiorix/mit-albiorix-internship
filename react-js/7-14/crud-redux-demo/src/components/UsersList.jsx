import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function UsersList() {
    const users = useSelector((state) => state.users);
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
      {users.length > 0 && (
        <div className="container">
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
    </>
  );
}

export default UsersList;
