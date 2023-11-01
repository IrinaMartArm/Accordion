import React from "react"
import { AccTitle } from "./AccTitle"
import { AccordBody } from "./AccordBody"

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
    items: string[]
}

export const ControleAccordion: React.FC<AccordionPropsType> = (props: AccordionPropsType) => {

    

    return (  
        <div>
            <AccTitle title={props.titleValue} onClick={props.onClick}/>
            { !props.collapsed && <AccordBody items={props.items}/>}             
        </div>
    );
}