import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "./Search";

function UsersList() {
  //search state
  const [searchText, setSearchText] = useState("");
  const [tempUsers, setTempUsers] = useState([]);

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  //search logic 2
  // useEffect(() => {
  //   console.log("in list", users);
  //   let flagusers = users;

  //   if (searchText) {
  //     flagusers = flagusers.filter((user) => {
  //       return user.name.includes(searchText);
  //     });
  //   }
  //   setTempUsers([...flagusers]);
  // }, [users, searchText]);

  useEffect(() => {
    console.log("in list", users);
    let flagusers = users;
    let timer;
    if (searchText) {
      timer = setTimeout(() => {
        console.log("flag", flagusers);
        flagusers = flagusers.filter((user) => {
          return user.name.includes(searchText);
        });
        setTempUsers([...flagusers]);
      }, 1000);
    } else {
      setTempUsers([...flagusers]);
    }

    return () => clearTimeout(timer);
  }, [users, searchText]);

  const deleteHandler = (user, index) => {
    dispatch({ type: "deleteUser", value: user });
  };

  const editHandler = (user, index) => {
    let userAndIndex = { user: user, index: index };
    dispatch({ type: "editUser", value: { userAndIndex } });
  };

  return (
    <>
      <Search searchText={searchText} setSearchText={setSearchText} />
      {tempUsers?.length > 0 && (
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
              {tempUsers.map((user, index) => {
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
