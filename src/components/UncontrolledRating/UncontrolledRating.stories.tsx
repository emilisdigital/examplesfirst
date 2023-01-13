import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {UncontrolledRating} from './UncotrolledRating';
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/UncontrolledRating',
    component: UncontrolledRating,
} as ComponentMeta<typeof UncontrolledRating>;

const callback = action("rating changed inside component")

const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating {...args} />;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    defaultValue: 0,
    onChange: callback
}

export const Rating1 = Template.bind({});
Rating1.args = {
    defaultValue: 1,
    onChange: callback
}

export const Rating2 = Template.bind({});
Rating2.args = {
    defaultValue: 2,
    onChange: callback
}

export const Rating3 = Template.bind({});
Rating3.args = {
    defaultValue: 3,
    onChange: callback
}

export const Rating4 = Template.bind({});
Rating4.args = {
    defaultValue: 4
}

export const Rating5 = Template.bind({});
Rating5.args = {
    defaultValue: 5
}
