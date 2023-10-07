import { useState } from "react"
import { AccTitle } from "./AccTitle"
import { AccordBody } from "./AccordBody"

type AccordionPropsType = {
    titleValue: string
}

export const Accordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(false)

    return (  
        <div>
            <AccTitle title={props.titleValue}/>
            <button onClick={()=>{setCollapsed(false)}}>open</button>
            <button onClick={()=>{setCollapsed(true)}}>cloce</button>
            { !collapsed && <AccordBody/>}             
        </div>
    );
}
