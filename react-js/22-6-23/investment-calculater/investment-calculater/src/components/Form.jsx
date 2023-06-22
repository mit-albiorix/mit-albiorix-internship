import React, { useState } from "react";
// import Result from "./Result";
import classes from './Form.module.css'

function Form(props) {
  const [inputFormData, setFormData] = useState({
    enteredCurrentSavings: "",
    enteredYearlySavings: "",
    enteredExpectedInterest: "",
    enteredInvestmentDuration: "",
  });

  const currentSavingsChangeHandler = (event) => {
    console.log(event.target.value);
    setFormData((prevState) => {
      return {
        ...prevState,
        enteredCurrentSavings: event.target.value,
      };
    });
  };

  const yearlySavingsChangeHandler = (event) => {
    console.log(event.target.value);
    setFormData((prevState) => {
      return {
        ...prevState,
        enteredYearlySavings: event.target.value,
      };
    });
  };

  const expectedInteresrChangeHandler = (event) => {
    console.log(event.target.value);
    setFormData((prevState) => {
      return {
        ...prevState,
        enteredExpectedInterest: event.target.value,
      };
    });
  };

  const investmentDurationChangeHandler = (event) => {
    console.log(event.target.value);
    setFormData((prevState) => {
      return {
        ...prevState,
        enteredInvestmentDuration: event.target.value,
      };
    });
  };

 
  const calculateHandler = (event) => {
    event.preventDefault();
    props.result(inputFormData);
    setFormData({
      enteredCurrentSavings: "",
      enteredYearlySavings: "",
      enteredExpectedInterest: "",
      enteredInvestmentDuration: "",
    });

    //   // do something with yearlyData ...
  };

 

  return (
    <>
      <form className={classes.form} onSubmit={calculateHandler}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={currentSavingsChangeHandler}
              value={inputFormData.enteredCurrentSavings}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={yearlySavingsChangeHandler}
              value={inputFormData.enteredYearlySavings}
            />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={expectedInteresrChangeHandler}
              value={inputFormData.enteredExpectedInterest}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={investmentDurationChangeHandler}
              value={inputFormData.enteredInvestmentDuration}
            />
          </p>
        </div>
        <p className={classes.actions}>
        
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>


    </>
  );
}

export default Form;
