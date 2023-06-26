import React, { useState } from "react";


function Form(props) {
  const [formInput, setFormInput] = useState({
    username: "",
    age: "",
  });

  const formHandler = (e) => {
    e.preventDefault();
    console.log(formInput.username);
    console.log(formInput.age);

    if (
      formInput.username.trim().length === 0 ||
      formInput.age.trim().length === 0
    ) {
      alert("please enter a value in these field");
    } else {
      if (+formInput.age <= 0 || +formInput.age > 100) {
        alert(
          "please enter a valid age! age can't be nagetive or zero and can't be greater than 100"
        );
      } else {
        props.data(formInput);
      }
    }

    setFormInput({
      username: "",
      age: "",
    });
  };

  const usernameHandler = (event) => {
    console.log(event.target.value);
    setFormInput((prevState) => {
      return {
        ...prevState,
        username: event.target.value,
      };
    });
  };

  const ageHandler = (event) => {
    console.log(event.target.value);
    setFormInput((prevState) => {
      return {
        ...prevState,
        age: event.target.value,
      };
    });
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
              onChange={usernameHandler}
              value={formInput.username}
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
              onChange={ageHandler}
              value={formInput.age}
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
