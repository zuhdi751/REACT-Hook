import React, { useState } from "react"
import './counterhook.css'

function CounterHook () {
    const [count, setCount] = useState(5)

    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        setCount(count - 1)
    }


    
    return (
        <div className="hook-container">
            <h1>Counter Hook</h1>
            <button onClick={decrementCount}>-</button>
            <h2>You clicked {count} times</h2>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default CounterHook