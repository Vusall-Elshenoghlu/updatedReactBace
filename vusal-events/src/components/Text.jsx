import React, { useState } from 'react'

function Text() {
    let [isHide,setHide] = useState(true)
    function isVisible(){
       setHide(!isHide)
    }
  
  return (
    <div>
        <br /><br /><br /><br />
      <button onClick={isVisible}>{isHide ? "hide" :"show"}</button>
      {isHide && <p>This is text </p>}
    </div>
  )
}

export default Text
