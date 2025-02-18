import { useState } from "react"
import AttemptsList from "../components/AttemptsList";

export default function CallbackPage() {

  const [attempts, setAttempts] = useState([]);
  const [input, setInput] = useState('');

  const addAttempt = () => {
    const stringifiedDate = Date.now();
    setAttempts( old => ([...old, { key: stringifiedDate, value: input }]));
  }

  const heavyCalculation = () => {
    console.log('Called HEAVY FUNCTION');
    // Do some heavy calculations...
    return 1;
  };

  return (
    <div>
      <h3>Work with useCallback hook</h3>
      <input value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={addAttempt}>Add attempt</button>
      <AttemptsList attempts={attempts} />
      {/* <p>Heavy calculations result: {heavyCalculation}</p> */}
    </div>
  )
}