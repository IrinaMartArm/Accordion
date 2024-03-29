import {useEffect, useState} from "react";

export default {
    title: 'UseEffect'
}



export  const RenderExample = () => {
    console.log('counter')
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        console.log('useEffect every render time')
        document.title = counter.toString()
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



export  const TimeOutExample = () => {
    console.log('counter')
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        console.log('useEffect setTimeout')
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
    }, [counter]);

    useEffect(() => {
        console.log('tik')
        const intervalId = setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, []);


    return <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        <button onClick={()=>setFake(fake + 1)}>+</button>
        counter: {counter}   fake: {fake}
    </>
}

export const KeysTracker = () => {

    const [text, setText] = useState('')
    // console.log(text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            setText(text + e.key)
            console.log(e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text]);
    return <>
    Text:  {text}
    </>
}