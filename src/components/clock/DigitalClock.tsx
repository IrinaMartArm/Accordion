import React from 'react';
import {PropsTypeForClock} from "./Clock.tsx";



export const DigitalClock: React.FC<PropsTypeForClock> = ({date}) => {
    const addZero = (number: number) => number < 10 ? '0' + number : number
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return (
        <div>
            <span>{addZero(date.getHours())}: </span>
            <span>{addZero(date.getMinutes())}: </span>
            <span>{addZero(date.getSeconds())} -----  </span>
            <span>{addZero(date.getHours())}: </span>
            <span>{addZero(date.getMinutes())}: </span>
            <span>{seconds}</span>
        </div>
    )
}
