import {useEffect, useState} from 'react';
import {log} from 'util';

export default {
    title: 'useEffect demo'
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample")

    useEffect(() => {
        setInterval(() => {
            console.log('akakak')
            setCounter(counter => counter + 1)

        }, 1000)
    }, [])

    return <>
        Counter: {counter}
    </>
}