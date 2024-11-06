import { useState } from "react"

function App() {

  let [counter, setCounter ] = useState(1)

  let addNumber;
  let removeNumber;

   if (counter < 20 && counter > 0) {
    addNumber = () => {
      setCounter(counter + 1);
    }
    removeNumber = () => {
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <div>
        <p>
          Counter : {counter}
        </p>
        <button onClick={addNumber}>
          Increment
        </button>
        <br/>
        <button onClick={removeNumber}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
