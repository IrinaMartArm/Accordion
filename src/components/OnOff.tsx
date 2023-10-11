import React from "react"

type OnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

export const OnOff: React.FC<OnOffPropsType> = (props: OnOffPropsType) => {

    

    // const onStyle = {
    //     width: '30px',
    //     height: '30px',
    //     padding: '3px',
    //     borderRadius: '2px',
    //     border: '1px solid black',
    //     display: 'inline-block',
    //     backgroundColor: on ? 'lightgreen' : 'white'
    // }
    // const offStyle = {
    //     width: '30px',
    //     height: '30px',
    //     padding: '3px',
    //     borderRadius: '2px',
    //     border: '1px solid black',
    //     display: 'inline-block',
    //     marginLeft: '10px',
    //     backgroundColor: on ? 'white' : 'lightblue'
    // }
    const indikatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.on ? 'lightgreen' : 'lightblue'
    }

    return (  
        <div>
            <div style={indikatorStyle} onClick={()=>{props.setOn(props.on)}}></div>
        </div>
    );
}
