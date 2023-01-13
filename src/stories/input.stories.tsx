import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Example/input',
};

const Template: ComponentStory<any> = (args) => <input {...args}/>;

export const UncontrolledInput1 = Template.bind({})
UncontrolledInput1.args = {
    defaultValue: ""
}
export const ControlledInput1 = Template.bind({});
ControlledInput1.args = {
    value: 'lalal'
}

export const TrackValueOfUncontrolledInput: ComponentStory<any> = (arqs) => {
    const [value, setValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <>
        <input {...arqs} onChange={onChange}/> - {value} -
    </>
}
TrackValueOfUncontrolledInput.args = {
    placeHolder: 'Enter text',
}

export const GetValueOfUncontrolledInput: ComponentStory<any> = (arqs) => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input {...arqs} ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value}
    </>
}
GetValueOfUncontrolledInput.args = {
    placeHolder: ''
}

export const ControlledInput: ComponentStory<any> = (arqs) => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)
    return <input value={parentValue} onChange={onChange}/>
}
ControlledInput.args = {
    placeHolder: "one"
}

export const ControlledCheckbox: ComponentStory<any> = (arqs) => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}
ControlledCheckbox.args = {

}

export const ControlledSelect: ComponentStory<any> = (arqs) => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value="1">Paris</option>
        <option value="2">Rio</option>
        <option value="3">Baku</option>
    </select>
}
ControlledSelect.args = {

}