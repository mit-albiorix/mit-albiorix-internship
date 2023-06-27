import React from "react";

function UsersList(props) {
  console.log(props.users);

  const users = props.users;

  const deleteUser = (index) => {
    console.log(index);
    users.splice(index, 1);
    props.usersAfterDelete(users);
  };

  const updateHandler = (index) =>{
   const updateUserObj = {
        username  : users[index].username,
        email:users[index].email,
        password : users[index].password
    }
    console.log(updateUserObj);

     props.updateUser(updateUserObj,index);
  }
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
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>

                  <td>
                    <button
                      type="button"
                      class="btn btn-danger mr-2"
                      onClick={() => {
                        deleteUser(index);
                      }}
                    >
                      Delete
                    </button>
                    <button type="button" class="btn btn-primary"   data-toggle="modal" data-target="#updateModal" onClick={()=>{updateHandler(index)}}>
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
