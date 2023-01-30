import { useEffect } from 'react';
import { useState } from 'react';
import { AnalogClockView } from './AnalogClockView';
import { DigitalClockView } from './DigitalClockView';

type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const IntervalId = setInterval(() => {
            console.log("Tick")
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(IntervalId)
        }
    }, [])

    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return <>
        {view}
    </>
}

export type ClockViewPropsType = {
    date: Date
}