import React from 'react'

function Display({displayNumber}) {
  return (
    <>    
    <input type="text" value={displayNumber} readOnly   />
    </>

  )
}

export default Display;