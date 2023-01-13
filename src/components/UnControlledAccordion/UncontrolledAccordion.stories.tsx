import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {UncontrolledAccordion} from './UncotrolledAccordion';

export default {
    title: 'components/UncontrolledAccordion',
    component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;

const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args} />;

export const UncontrolledAccordionStory = Template.bind({});
UncontrolledAccordionStory.args = {
    titleValue: "UncontrolledAccordionStory"
}
