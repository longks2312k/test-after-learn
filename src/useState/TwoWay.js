import React, { useState } from 'react';

const gifts = [
  'Iphone 13',
  'SH Mode',
  '10000$'
]
const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'JavaScript'
  },
  {
    id: 3,
    name: 'Python'
  }
]

function TwoWay(props) {
  // useState
  const [gift, setGift] = useState()
  const getGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
  }

  // Two way biding
  const [checked, setChecked] = useState([]);
  console.log(checked)
  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }
  const handleSubmit = () => {

  }
  return (
    <div style={{ padding: 30 }}>
      {/* useState */}
      {/* <div>
                <h1>{gift || 'Chưa có phần thưởng'}</h1>
                <button onClick={getGift}>Nhận Thưởng</button>
            </div> */}

      {/* Two way biding */}
      {courses.map(course => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default TwoWay;