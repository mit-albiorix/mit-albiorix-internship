import React from "react";

function UserList(props) {
  return (
    <>
      <div className="container mt-5">
        <h2 style={{textAlign:"center"}}>UserList</h2>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">UserName</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>

            {props.userData.map((user,index)=>{
                return(
                    <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{user.username}</td>
                    <td>{user.age}</td>
                   
                  </tr>
                );
            })}
           

           
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserList;
