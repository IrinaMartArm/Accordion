import  {useState} from "react";

export default {
    title: 'UseState'
}

const generateData = () => {
    console.log('generateData')
    return 5342648926
}


export  const Example = () => {
    console.log('counter')
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={()=>setCounter(changer)}>+</button>
        {counter}
    </>
}