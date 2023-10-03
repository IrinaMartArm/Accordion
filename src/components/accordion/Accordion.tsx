import { AccTitle } from "./AccTitle"
import { AccordBody } from "./AccordBody"

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
    return (  
        <div>
            <AccTitle title={props.titleValue}/>
            { !props.collapsed && <AccordBody/>}             
        </div>
    );
}
