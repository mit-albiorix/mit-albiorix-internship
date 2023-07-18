import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser,updateUser } from "../store/crudSlice";

function Form() {
  const dispatch = useDispatch();
  const editUser = useSelector((state) => state.createUser.editUser);
  const users = useSelector((state) => state.createUser.users);
  console.log("fhhbdh", users);

  console.log("editUser?0", editUser);

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  useEffect(() => {
    console.log("editUser?0", editUser);
    if (editUser?.id) {
      setFormData({
        name: editUser?.name,
        password: editUser?.password,
        id: editUser?.id,
      });
    }
  }, [editUser]);

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
    !editUser.id ? dispatch(addUser(formData)) : dispatch(updateUser(formData));
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
            {!editUser?.id ? "Add USer" : "Update"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
