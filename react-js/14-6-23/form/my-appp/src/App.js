// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  let fname = "";
  let lname="";

  const [initialFirstName,setInitialFirstName] =useState(fname);
  const [initialLastName,setInitialLastName] =useState(lname);

  const [firstName,setFirstName] =useState();
  const [lastName,setLastName] =useState();

  const inputFname =(event)=>{
      console.log(event.target.value);
      setInitialFirstName(event.target.value);

  }

  const inputLname =(event)=>{
    console.log(event.target.value);
    setInitialLastName(event.target.value);

}

  const handleInputData = (event) =>{
    event.preventDefault();
      console.log("submitted");
      setFirstName(initialFirstName);
      setLastName(initialLastName)
      setInitialFirstName(fname)
      setInitialLastName(lname)
  }

  return (
    <div>
      <h1>hello {firstName} {lastName}</h1>
      <form onSubmit={handleInputData}>
        <div>
          <input
            type="text"
            name="fname"
            id="name"
            placeholder="enter your first name"
            onChange={inputFname}
            value={initialFirstName}
          />
           <input
            type="text"
            name="lname"
            id="name"
            placeholder="enter your last name"
            onChange={inputLname}
            value={initialLastName}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}


// function App() {
  
//   let name="";
//   let value="";

//   const [fullName,setFullName] = useState({
//     fname : "",
//     lname : "",
//   })

//   const inputData = (event)=>{
//     console.log(event.target.value);
//     name =event.target.name;
//     value =event.target.value;
//   }

//   const handleInputData = (event)=>{
//     event.preventDefault();

//     console.log("handle",name);    
//   }

//   return (
//     <div>
//       <h1>
//         hello {fullName.fname} {fullName.lname}
//       </h1>

//       <form onSubmit={handleInputData}>
//         <div>
//           <input
//             type="text"
//             name="fName"
//             id="name"
//             placeholder="enter your first name"
//             onChange={inputData}
//             value={fullName.firstName}
//           />
//           <input
//             type="text"
//             name="lName"
//             id="name"
//             placeholder="enter your last name"
//             onChange={inputData}
//             value={fullName.lastName}
//           />
//         </div>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

export default App;
