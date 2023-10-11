import { useState } from "react"
import { AccTitle } from "./AccTitle"
import { AccordBody } from "./AccordBody"

type AccordionPropsType = {
    titleValue: string
}

export const Accordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(true)

    return (  
        <div>
            <AccTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
            { !collapsed && <AccordBody/>}             
        </div>
    );
}
