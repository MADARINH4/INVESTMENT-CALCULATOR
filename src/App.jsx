import { useState } from 'react';
import UserInput from './components/UserInput';
import Result from './components/Result';
import { calculateInvestmentResults } from './util/investment';

function deriveHandleInputs(userInputs) {
  let annualResults = calculateInvestmentResults(userInputs);
  return annualResults;
}

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 120,
    expectedReturn: 5,
    duration: 2,
  });
  const annualResults = deriveHandleInputs(userInputs);
  const inputIsValid = userInputs.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    //'+' convert forçadamente para number
    setUserInputs((prevInputs) => {
      return {
        ...prevInputs,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <UserInput userInputs={userInputs} handleChange={handleChange} />;
      {!inputIsValid && (
        <p className="center">Please enter valid input data!</p>
      )}
      {inputIsValid && <Result annualResults={annualResults} />}
    </>
  );
}

export default App;
