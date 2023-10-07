import { useState } from "react"

export const OnOff = () => {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '30px',
        padding: '3px',
        borderRadius: '2px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'lightgreen' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        padding: '3px',
        borderRadius: '2px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'white' : 'lightblue'
    }
    const indikatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'lightgreen' : 'lightblue'
    }

    return (  
        <div>
            <button style={onStyle} onClick={()=>{setOn(true)}}>on</button>
            <button style={offStyle} onClick={()=>{setOn(false)}}>off</button>
            <div style={indikatorStyle}></div>
        </div>
    );
}
