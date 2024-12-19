import React, { useState } from 'react'

function SeconTask() {
    let [myText,setText] = useState("")
    function handleWrite(e){
        setText(e)
    }
    function handleReset(){
        setText("")
    }
  return (
    <div>
        <br /><br /><br />
      <input type="text" value={myText} onChange={(e)=>handleWrite(e.target.value)} placeholder='name' />
        <p>
            You Typed: {myText}
        </p>
        <button onClick={handleReset}> reset</button>

    </div>
  )
}

export default SeconTask
