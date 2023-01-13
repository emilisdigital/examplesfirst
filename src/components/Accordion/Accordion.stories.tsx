import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Accordion, AccordionPropsType} from './Accordion';
import {action} from "@storybook/addon-actions";

const CategoryObj = (categoryName: 'Color' | 'Events') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            ...CategoryObj('Color')
        },
        onChange: {
            ...CategoryObj('Events')
        },
        onClick: {
            ...CategoryObj('Events')
        }
    }
} as ComponentMeta<typeof Accordion>;


const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]}
                                                  onClick={onClickCallback}/>

export const UsersUnCollapsedMove = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}
                                                     items={[{title: "Dimych", value: 1}, {title: "Valer", value: 2}]}
                                                     onClick={onClickCallback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}
                      items={[
                          {title: "Dimych", value: 1},
                          {title: "Valer", value: 2}
                      ]}
                      onClick={onClickCallback}/>
}





// const callback = action("accordion mode change event fired")
// const onClickCallback = action("some item was clicked")
//
//
// const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;
//
// export const CollapsedMode: ComponentStory<typeof Accordion> = Template.bind({});
// CollapsedMode.args = {
//     titleValue: "CollapsedMode",
//     collapsed: true,
//     onChange: callback,
//     items: [{title: "Dimych", value: 1}, {title: "Valera", value: 2}],
//     onClick: onClickCallback
// }
//
// export const UnCollapsedMode: ComponentStory<typeof Accordion> = Template.bind({});
// UnCollapsedMode.args = {
//     titleValue: "UnCollapsedMode",
//     collapsed: false,
//     onChange: callback,
//     items: [{title: "Dimych", value: 1}, {title: "Valera", value: 2}],
//     onClick: onClickCallback
// }
//
// export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
//     const [value, setValue] = useState<boolean>(true)
//     return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)} titleValue={"Names"}
//                        onClick={onClickCallback} />
// }
// ModeChanging.args = {
//
// }