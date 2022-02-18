import React, { useEffect, useState } from 'react';

function DomEvent(props) {
  const [items, setItems] = useState([])
  const [type, setType] = useState('posts')
  const pages = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(items => {
        setItems(items);
      })
  }, [type])
  //Listen DOM Event
  const [showGoToTop, setShowGoToTop] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {

    //Scroll
    const handleScroll = () => {
      if(window.scrollY>=200){
        setShowGoToTop(true)
      }else{
        setShowGoToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    //Resize
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    //cleanup fs
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>{width}</h1>
      {pages.map(page => (
        <button
          key={page}
          style={type === page ? {
            color: 'white',
            backgroundColor: '#333'
          } : {}}
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
        {showGoToTop && (
          <button
            style={{
              position: 'fixed',
              right: 20,
              bottom: 20
            }}
          >
            Go To Top
          </button>
        )}
      </ul>
    </div>
  );
}

export default DomEvent;