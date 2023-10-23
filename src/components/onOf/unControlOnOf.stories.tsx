import { useState } from "react"
import { UnControlOnOff } from "./UnControlOnOf"

export default {
    title: 'OnOf',
    component: UnControlOnOff
}

export const OnOffOpen = () => {<UnControlOnOff defaultValue={true}  /> }
export const OnOffClose = () => {<UnControlOnOff defaultValue={false}/>}
export const OnOffActive = () => {
    const [value, setValue] = useState<boolean>(true)
    return <UnControlOnOff onClick={()=>setValue(!value)} />
}
