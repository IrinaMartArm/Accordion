import React, { useState } from "react"
import { OnOff } from "./OnOff";

export default {
    title: 'OnOf',
    component: OnOff
}

export const OpenOnOff = () => {<OnOff on={true} onClick={()=>{}}/>}
export const ClouseOnOff = () => {<OnOff on={false} onClick={()=>{}}/>}
export const ActiveOnOff = () => {
    const [value, setValue] = useState(true)
    return <OnOff on={value} onClick={setValue}/>
}
