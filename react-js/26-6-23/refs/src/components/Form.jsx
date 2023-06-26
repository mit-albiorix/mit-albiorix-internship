// import React, { useState } from "react";
import { useRef } from "react";


function Form(props) {

  const username = useRef();
  const age = useRef();


  const formHandler = (e) => {
    e.preventDefault();
    // console.log(formInput.username);
    // console.log(formInput.age);

    // ref 
    console.log(username.current.value);
    console.log(age.current.value);

     const entereduserName = username.current.value;
     const enteredage = age.current.value;

    if (
      entereduserName.trim().length === 0 ||
      enteredage.trim().length === 0
    ) {
      alert("please enter a value in these field");
    } else {
      if (+enteredage <= 0 || +enteredage > 100) {
        alert(
          "please enter a valid age! age can't be nagetive or zero and can't be greater than 100"
        );
      } else {
        props.data(entereduserName,enteredage);
        username.current.value = '';
        age.current.value = '';
      }
    }

   
  };

  return (
    <>

      <div className="container mt-5">
        <form onSubmit={formHandler}>
          <div className="form-group">
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter Username"
            
              ref = {username}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              aria-describedby="emailHelp"
              placeholder="Enter Age"
             
              ref={age}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
