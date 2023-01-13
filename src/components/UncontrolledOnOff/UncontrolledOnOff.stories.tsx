import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/UncontrolledOnOff',
    component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;

const callback = action("on or off clicked")

const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
    defaultOn: true,
    onChange: callback
}

export const OffMode = Template.bind({});
OffMode.args = {
    defaultOn: false,
    onChange: callback
}