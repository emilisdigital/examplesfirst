import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UnControlledAccordion/UncotrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncotrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";

function App() {
    const [value, setValue] = useState('2')

    return (
        <div className="App">

            <Select onChange={setValue} items={[
                {value: "1", title: "Rio"},
                {value: "2", title: "Baku"},
                {value: "3", title: "Paris"},
            ]} value={value}/>
        </div>
    );
}
//
// type PageTitlePropsType = {
//     title: string
// }
//
// function PageTitle(props: PageTitlePropsType) {
//     console.log("AppTitle rendering")
//     return <> {props.title}</>
// }

export default App;
