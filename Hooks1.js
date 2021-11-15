import React,{useState} from 'react'

function Hooks1() {
    const [color, setColor] = useState("red");
    return (
        <div>
            My Favourate Color is {color}
            <br/>
            <button onClick={()=>setColor("blue")}>Change Color to Blue</button>
            <button onClick={()=>setColor("red")}>Change Color to Red</button>
            <button onClick={()=>setColor("cyan")}>Change Color to Cyan</button>
        </div>
    )
}

export default Hooks1