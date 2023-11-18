import {useEffect, useState} from "react";

export default {
    title: 'UseEffect'
}



export  const Example = () => {
    console.log('counter')
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        console.log('useEffect every render time')
    });

    useEffect(() => {
        console.log('useEffect only first render (like componentDidMount)')
        document.title = counter.toString()
    }, []);

    useEffect(() => {
        console.log('useEffect first render and every count change')
    }, [counter]);

    return <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        <button onClick={()=>setFake(fake + 1)}>+</button>
        {counter} {fake}
    </>
}