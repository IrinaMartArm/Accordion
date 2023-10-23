// Button.stories.ts|tsx

import type { Meta } from '@storybook/react';

import { ControleAccordion } from './ControleAccordion';

const meta: Meta<typeof ControleAccordion> = {
    component: ControleAccordion,
};

export default meta;

export const CollapsedAccordion = () => {
    return <div>Close</div>
}

export const OpenAccordion = () => {
    return <div>Open</div>
}