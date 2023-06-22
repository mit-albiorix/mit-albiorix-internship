import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {

  const [userInput,setUserinput] = useState(null)
  const calculateHandler = (userInput) => {
    setUserinput(userInput)
  };
  const yearlyData = []; // per-year results

  if(userInput){
    let currentSavings = userInput['enteredCurrentSavings']; // feel free to change the shape of this input object!
    const yearlyContribution = userInput['enteredYearlySavings']; // as mentioned: feel free to change the shape...
    const expectedReturn = userInput['enteredExpectedInterest'] / 100;
    const duration = userInput['enteredInvestmentDuration'];
  
   
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
  }

  
  }
  console.log("in app");
  console.log(yearlyData);
 

  return (
    <div>
      <Header />
      <Form result={calculateHandler}/>
      {!userInput && <p style={{textAlign:"center"}}>no invenstment calculated yet</p>}
      {userInput && <Result finalData={yearlyData} initialInvestment={userInput['enteredCurrentSavings']}/>}
      
    </div>
  );
}

export default App;
