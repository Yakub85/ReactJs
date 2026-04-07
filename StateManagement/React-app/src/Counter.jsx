import { useState } from "react";

function Counter(){

    const [count, setCount]=useState(0);

    const Increase=()=>{
        setCount(count+1);
    };
    const Decrease=()=>{
        if (count>0) {
            setCount(count-1);
        }
        
    };



    return(
        <>
          <h1>Count:{count}</h1>
          <button onClick={Decrease}>➖</button>
          <button onClick={Increase}>➕</button>
        </>
    )
}
export default Counter;