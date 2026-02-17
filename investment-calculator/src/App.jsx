import { useState } from "react"
import Header from "./components/Header"
import Result from "./components/Result"
import UserInput from "./components/Usernput"

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 12000,
        expectedReturn: 6,
        duration: 12
    })

    function handleChange(inputIndentifier, newValue) {
  setUserInput(prevUserInput => ({
    ...prevUserInput,
    [inputIndentifier]: +newValue   // convert to number
  }));
}

const inputIsValid = Object.values(userInput).every(value => value > 0);

  return (
    <>
    <Header />
    <UserInput userInput={userInput} handleChange={handleChange} />
    {inputIsValid ? <Result userInput={userInput} /> : <p className="center">Please enter valid input values.</p>}
    </>
  )

}

export default App
