import React, { useState } from 'react';

function Lession1(props) {
  const [info, setInfo] = useState({
    name: 'Long',
    age: 23,
    address: 'Ha Noi',
  })

  const handleClick = () => {
    setInfo({ ...info, bio: 'yeu tu do' })
  }

  return (
    <div>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default Lession1;