import React, { useState } from 'react'


function States() {
    // let count = 0;
    //hook
    let [count,setCount] = useState(0)
    
    

    function handleDecrease(){
        if (count > 0 ){
            setCount(--count)
            console.log(count);
        }
        
        
    }
    function handleIncrease(){
        setCount(++count)
        console.log(count);
        
    }
    function handleReset(){
        setCount(0)
    }
  return (
    <div>
      <button onClick={()=> handleDecrease()}>-</button>
      <span>{count}</span>
      <button onClick={()=>handleIncrease()}>+</button>
      <button onClick={()=>handleReset()}>Reset</button>
    </div>
  )
}

export default States
