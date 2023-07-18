import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {deleteUser, editUsers} from '../store/crudSlice'

function UserList() {
  const users = useSelector((state)=>state.createUser.users)
  const dispatch =useDispatch()
  console.log("users",users);

  const deleteHandler =(user,index)=>{
    let userAndIndex = {user,index}
    dispatch(deleteUser(userAndIndex))
  }
  const editHandler = (user,index)=>{
    let userAndIndex = {user,index}
    dispatch(editUsers(userAndIndex))
  }

  return (
    <>
   {users.length > 0 &&   <div className="container mt-5">
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
      </div>}

      {users.length ===0  && <h4 style={{textAlign:'center'}}>no users found!</h4>}
    
    </>
  );
}

export default UserList;
