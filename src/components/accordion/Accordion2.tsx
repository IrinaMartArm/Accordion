import React from "react"
import { AccTitle } from "./AccTitle"
import { AccordBody } from "./AccordBody"

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: () => void
}

export const Accordion2: React.FC<AccordionPropsType> = (props: AccordionPropsType) => {

    

    return (  
        <div>
            <AccTitle title={props.titleValue} onClick={props.setCollapsed}/>
            { props.collapsed && <AccordBody/>}             
        </div>
    );
}
