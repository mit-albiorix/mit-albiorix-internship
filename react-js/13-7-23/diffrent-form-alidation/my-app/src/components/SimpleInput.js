import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid,setNameIsValid] =useState(false);
  const [nameToched,setNameTouched] =useState(false);

  const userefName = useRef();

  const inputnameHandler = (event) => {
    console.log(event.target.value);
    setEnteredName(event.target.value);
    if(event.target.value.trim() !== ''){
      setNameIsValid(true)
        return;
    }
    setNameIsValid(true)
    
  };

  const formHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);
    console.log("enteredname", enteredName);
    if(enteredName.trim() === ''){
      setNameIsValid(false);

      return;
    }
    setNameIsValid(true)
    const name = userefName.current.value;
    console.log("userefname", name);
    setEnteredName("");
  };

const inputnameBlurHandler=()=>{
  setNameTouched(true);
  if(enteredName.trim() === ''){
    setNameIsValid(false);

    return;
  }
// setNameIsValid(true)
}

  return (
    <form onSubmit={formHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputnameHandler}
          onBlur={inputnameBlurHandler}
          ref={userefName}
          value={enteredName}
        />
        {!nameIsValid &&  nameToched && <p className="error-text">Name can't be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
