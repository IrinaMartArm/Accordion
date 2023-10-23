import { ChangeEvent, useRef, useState } from "react";
import { UnControlInput } from "./UnControlInput";

export default {
    title: 'Input',
    component: UnControlInput
}

export const TrackInput = () => {
    const [value, setValue] = useState('')
    const inputHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        const text = e.currentTarget.value
        setValue(text)
    }
    return (<>
        <input onChange={inputHandler}/>{-value}
    </>)
}


export const TrackInputByRef = () => {
    const [value, setValue] = useState('')
    const ref = useRef<HTMLInputElement>(null)
    const buttonHandler = () => {
        const el = ref.current as HTMLInputElement;
        setValue(el.value)
    }
    return (<>
        <input ref={ref}/><button onClick={buttonHandler}>Save</button>{-value}
    </>)
}






