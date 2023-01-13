import React, {useEffect} from 'react';
import {useState} from 'react';
import {getDblTimeClock} from './DateUntilFunction';



export const Clock = (any: any) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const IntervalId = setInterval( () => {
            console.log("Tick")
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(IntervalId)
        }
    }, [])


    return <>
        <span>{getDblTimeClock(date.getHours())}</span>
        :<span>{getDblTimeClock(date.getMinutes())}</span>
        :<span>{getDblTimeClock(date.getSeconds())}</span>
    </>
}