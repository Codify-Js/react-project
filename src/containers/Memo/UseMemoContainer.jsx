import React, {useMemo, useRef, useState} from 'react'
import MemoComponent from './MemoComponent'
import { Button } from 'react-bootstrap';

const UseMemoContainer = (props) => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const inputRef = useRef()
  const memoRef = useRef()

  const factorialOf = (n) => {
    console.log("factorialOf(n) called!");
    return n <= 0 ? 1 : n * factorialOf(n - 1);
  }

  const factorial = useMemo(() => (
    factorialOf(number)
  ), [number]);

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };

  const onClick = () => setInc((i) => i + 1);
console.log('inputRef', inputRef.current)


const handleClick =() => {
  alert('clicked')
}
console.log('memoRef', memoRef);
return (
  <div>
    <div>
      Factorial of
      <input ref={inputRef} type="number" value={number} onChange={onChange} />
        <div>{factorial}</div>
        <button onClick={onClick}>Re-render</button>
      </div>  

      <Button onClick={() => memoRef.current?.handleRender()}>Click me</Button>
      <div>
        <MemoComponent ref={memoRef}  text={'MEMO Component'} handleClick={handleClick}/>
      </div>
  </div> 
)
}

export default UseMemoContainer