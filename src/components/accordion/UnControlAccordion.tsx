import {useReducer} from "react"
import { AccTitle } from "./AccTitle"
import { AccordBody } from "./AccordBody"

type AccordionPropsType = {
    titleValue: string
    items: string[]
}
type ActionType = {
    type: string
}
export type StateType = {
    collapsed: boolean
}

export const TOGGLE = 'TOGGLE'


const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE: {
            return  {...state, collapsed: !state.collapsed}
        }
    }
    return state
}




export const UnControlAccordion = (props: AccordionPropsType) => {

    // const [collapsed, setCollapsed] = useState(true)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (  
        <div>
            {/*<AccTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>  */}
            <AccTitle title={props.titleValue} onClick={()=>{dispatch({type: TOGGLE})}}/>
            { !state.collapsed && <AccordBody items={props.items}/>}
        </div>
    );
}