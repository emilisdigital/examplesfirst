import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';

import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

export const WithValue = () => {
    const [value, setValue] = useState('2')

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Rio"},
                    {value: "2", title: "Baku"},
                    {value: "3", title: "Paris"},
                ]}/>
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Rio"},
                    {value: "2", title: "Baku"},
                    {value: "3", title: "Paris"},
                ]}/>
    </>
}