import { ChangeEvent, useRef, useState } from "react";


export default {
    title: 'Input',
}

export const TrackInput = () => {
    const [value, setValue] = useState('')
    const inputHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        const text = e.currentTarget.value
        setValue(text)
    }
    return (<>
        <input onChange={inputHandler}/>{value}
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
        <input ref={ref}/><button onClick={buttonHandler}>Save</button>{value}
    </>)
}

export const ControllInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControllCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = () => {
        setParentValue(!parentValue)
    }
    return <input type="checkbox" checked={parentValue} onChange={onChangeHandler} />
}

export const ControllSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option value="1">Minsk</option>
            <option value="2">Erevan</option>
            <option value="3">Los</option>
        </select>
    )
    
}






