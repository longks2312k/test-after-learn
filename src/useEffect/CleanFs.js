import React, { useState, useEffect } from 'react';

function CleanFS(props) {
  const [avatar, setAvatar] = useState()

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  },[avatar])

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0]

    file.preview = URL.createObjectURL(file)
    console.log(file.preview)
    setAvatar(file)
  }
  return ( 
    <div>
      <input
        type="file"
        onChange={handlePreviewAvatar}
      >
      </input>
      {avatar && (
        <img src={avatar.preview} alt="" width="80%"/>
      )}
    </div>
  );
}

export default CleanFS;