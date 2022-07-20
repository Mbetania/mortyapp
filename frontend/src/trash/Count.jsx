import React, { useState } from 'react'

export const Count = () => {
    const [count, setCount] = useState(0)

    const add = ()=>{
        setCount(count+1)
    }

    const subtrack = ()=>{
        setCount(count -1)
    }

    const reset = ()=>{
        if (count >=1 || count <= 0){
            setCount(0)
        }
    }

    const double = (mult) =>{
        if (count % mult ===0){
            setCount(count *2)
        }
    }

return (
    <div>
        <button onClick={() => double(10)}>doble</button>
        <button onClick={add}>agregar</button>
        {count}
        <button onClick={subtrack}>quitar</button>
        <button onClick={reset}>volver a 0</button>
    </div>
)
}
