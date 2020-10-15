import React, { useState } from 'react'

const Functions = () => {
    const [number, handleChange] = useState({number: 0});
    return (
        <div>
            <h1>Counter: {number.number}</h1>
            <hr />
            <button onClick={()=> handleChange({number: number.number +1})}>Add</button>
            <button onClick={()=> handleChange({number: number.number -1})}>Remove</button>
            <button onClick={()=> handleChange({number: number.number = Math.floor(Math.random() *1000 +1)})}>Random</button>
            <button onClick={()=> handleChange({number: number.number = 0})}>Reset</button>
        </div>
    );
}

export default Functions
