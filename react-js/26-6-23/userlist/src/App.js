import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import UserList from "./components/UserList";

function App() {
  const dummyData = [];

  const [userData, setUserData] = useState(dummyData);

  const formData = (formInput) => {
    setUserData((prevState) => {
      return [...prevState,formInput];

      // return [formInput,...prevState]
    });
  };


  // const formData = (formInput) => {
  //  dummyData = ...dummyData;
  //  dummyData.push(formInput);
  //  setUserData(dummyData)
  //   // console.log("dummy",dummyData.push(formInput));
  //   console.log("in app", userData);
  //   console.log(userData.length);
  // };

  return (
    <>
      <Form data={formData} />
      {userData.length < 1 && (
        <p style={{ textAlign: "center", marginTop: "40px" }}>
          UsersData not Found, please enter a userdetails
        </p>
      )}
      {userData.length >= 1 && <UserList userData={userData} />}
    </>
  );
}

export default App;
