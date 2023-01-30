import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Clock} from './Clock';

export default {
    title: 'clock/clock',
    component: Clock,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const BaseAnalogTemplate = Template.bind({});
BaseAnalogTemplate.args = { mode: "analog" };

export const BaseDigitalTemplate = Template.bind({});
BaseDigitalTemplate.args = { mode: "digital" };