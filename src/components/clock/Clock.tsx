import React, {useEffect, useState} from 'react';
import {DigitalClock} from "./DigitalClock.tsx";
import {AnalogClock} from "./AnalogClock.tsx";

type ClockPropsType = {
    mode?: 'digital' | 'analog'
}
export type PropsTypeForClock = {date: Date}

export const Clock: React.FC<ClockPropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setDate(new Date())
    }, [date]);

    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, []);

    let view
    switch (props.mode) {
        case 'analog':
            view = <AnalogClock date={date}/>
            break
        case 'digital':
        default:
            view = <DigitalClock date={date}/>
    }

    return <div>{view}</div>
};

