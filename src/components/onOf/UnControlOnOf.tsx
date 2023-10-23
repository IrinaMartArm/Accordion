import { useState } from "react"

type OnOffPropsType = {
    defaultValue?: boolean
}

export const UnControlOnOff = (props: OnOffPropsType) => {
    const {defaultValue} = props
    const [value, setValue] = useState<boolean>(defaultValue ? defaultValue : false)

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
        backgroundColor: value ? 'lightgreen' : 'lightblue'
    }

    return (  
        <div>
            <div style={indikatorStyle} onClick={()=>setValue(!value)}></div>
        </div>
    );
}
