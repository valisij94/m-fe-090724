import { useCallback, useMemo, useState } from "react"
import AttemptsList from "../components/AttemptsList";

export default function CallbackPage() {

  const [attempts, setAttempts] = useState([]);
  const [input, setInput] = useState('');

  const addAttempt = () => {
    const stringifiedDate = Date.now();
    setAttempts( old => ([...old, { key: stringifiedDate, value: input }]));
  }

  const dropAttempt = useCallback( (attemptKey) => {
    setAttempts( old => old.filter(el => el.key !== attemptKey) );
  }, []);

  const heavyCalculation = useMemo(() => {
    // Do some heavy calculations...
    // console.log('[ARTIFICIALLY SLOW]');
    // let startTime = performance.now();
    // while (performance.now() - startTime < 1000) {
    //   // Do nothing for 500 ms to emulate extremely slow code
    // }
    return `${new Date().toLocaleTimeString()} ${input}`;
  }, [input]);

  const filterAttempts = useMemo(() => {
    console.log('Filter attempts');
    return attempts.filter( el => el.value.indexOf('A') >= 0 )
  }, [attempts]);


  return (
    <div>
      <h3>Work with useCallback hook</h3>
      <input value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={addAttempt}>Add attempt</button>
      <AttemptsList attempts={filterAttempts} dropAttempt={dropAttempt}/>
      <p>Heavy calculations result: {heavyCalculation}</p>
    </div>
  )
}