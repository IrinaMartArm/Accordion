import { useState } from "react"
import { ControleAccordion } from "./ControleAccordion"

export default {
    title: 'Accordion',
    component: ControleAccordion
}

export const AccordionClouse = () => {<ControleAccordion titleValue="Munu" collapsed={true} onClick={()=>{}} items={[]}/>}
export const AccordionOpen = () => {<ControleAccordion titleValue="Munu" collapsed={false} onClick={()=>{}} items={['ira', 'Suren']}/>}
export const AccordionActive = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const onClick = () => {
        setCollapsed(!collapsed)
    }
    return <ControleAccordion titleValue="Munu" onClick={onClick} collapsed={collapsed} items={['ira', 'Suren']}/>}












// Button.stories.ts|tsx

// import type { Meta } from '@storybook/react';

// import { ControleAccordion } from './ControleAccordion';

// const meta: Meta<typeof ControleAccordion> = {
//     component: ControleAccordion,
// };

// export default meta;

// export const CollapsedAccordion = () => {
//     return <div>Close</div>
// }

// export const OpenAccordion = () => {
//     return <div>Open</div>
// }