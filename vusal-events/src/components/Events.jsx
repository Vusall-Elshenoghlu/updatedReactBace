import React from 'react'

function Events() {
    function sayHello(){
        console.log("Hello World");
        
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log("salam eee kele");
        
    }
  return (
    <>
    <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" onChange={(e)=>console.log(e.target.value)}/>
        <button>Add</button>
    </form>
      {/* <button onClick={sayHello}>Click</button>  */}
    </>
  )
}

export default Events
