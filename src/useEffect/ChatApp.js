import React, { useState, useEffect } from 'react';

const lesion = [
  {
    id: 1,
    name: 'A1 React',
  },
  {
    id: 2,
    name: 'A2 React',
  },
  {
    id: 3,
    name: 'A3 React',
  },
  {
    id: 4,
    name: 'A4 React',
  },
]



function ChatApp(props) {
  const [lesionId, setLesionId] = useState(1)

  useEffect(() => {
    const handleComment = ({detail}) => {
      console.log(detail)
    }
    
    window.addEventListener(`lesion ${lesionId}`,handleComment)

    return () => {
      window.removeEventListener(`lesion ${lesionId}`,handleComment)
    }
  },[lesionId])

  return (
    <div>
      <ul>
        {lesion.map(lesion => (
          <li
            key={lesion.id}
            style={{
              color: lesionId === lesion.id ?
                'red':
                '#333'
            }}
            onClick={() => setLesionId(lesion.id)}
          >
            {lesion.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatApp;