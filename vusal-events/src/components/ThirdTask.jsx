import React, { useState } from 'react';

function ThirdTask() {
    
    const [fontSize, setFontSize] = useState(16); 
    function increaseSize() {
        setFontSize(prevSize => prevSize + 1); 
    }


    function decreaseSize() {
 
     
            setFontSize(prevSize => prevSize - 1); 
        
    }

    return (
        <div>
            <br /><br />
            <p style={{ fontSize: fontSize + "px" }}>Adjust my font size!</p>
            <button onClick={increaseSize}>Increase</button>
            <button onClick={decreaseSize} disabled={fontSize <= 10}>Decrease</button>
        </div>
    );
}

export default ThirdTask;
