import React, { useState, useEffect } from 'react';


// 1. useEffect(callback)
// - gọi call back mỗi khi component re-render
// 2. useEffect(callback, [])
// 3. useEffect(callback, [deps])
function UENomal(props) {
  const [items, setItems] = useState([])
  const [type, setType] = useState('posts')
  const pages = ['posts','comments','albums','photos','todos','users']
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(items => {
        setItems(items);
      })
  }, [type])

  return (
    <div style={{ padding: 20 }}>
      {pages.map(page =>(
        <button 
          key={page} 
          style={type === page ? {
            color:'white',
            backgroundColor:'#333'
          }:{}}
          onClick={() => setType(page)}
        > 
          {page}
        </button>
        ))}
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title || item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UENomal;