import React, { useRef, useState, useEffect } from 'react';

function UseRef(props) {
  const [count, setCount] = useState(60)

  const TimerId = useRef()
  const PrevCount = useRef()

  useEffect(() => {
    PrevCount.current = count
  },[count])

  const handleStart = () => {
    TimerId.current = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)
  }
  const handleStop = () => {
    clearInterval(TimerId.current)
  }
  console.log(count,PrevCount.current)
  
  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <h1>{PrevCount.current}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
}

export default UseRef;