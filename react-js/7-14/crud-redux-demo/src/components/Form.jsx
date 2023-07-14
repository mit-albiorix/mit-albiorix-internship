import React, { useEffect, useState } from "react";
import { Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux/";

function Form() {
  const edituser = useSelector((state) => state.edituser);

  console.log("formedit", edituser);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  useEffect(() => {
    if (edituser.id) {
      setFormData({
        name: edituser.name,
        password: edituser.password,
        id: edituser.id,
      });
    }
  }, [edituser.id]);

  const inputHandler = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const formHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch({ type: "addUser", value: formData });

    setFormData({
      name: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={formHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              onChange={inputHandler}
              name="name"
              value={formData.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={inputHandler}
              name="password"
              value={formData.password}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            
            {!edituser.id ? "Add USer" : "Update"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
