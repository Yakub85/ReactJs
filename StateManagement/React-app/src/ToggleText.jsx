import { useState } from "react"


function ToggleText() {
    const [isVisible,setIsVisible]=useState(false);


  return (
        <>
            <button onClick={()=>setIsVisible(!isVisible)}>
                {isVisible? "Hide" : "Show"}
            </button>
            {isVisible && <p>This is secret message</p>}
        </>
  )
    
}

export default ToggleText