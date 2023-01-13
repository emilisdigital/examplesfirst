import React, {useEffect, useState} from 'react';

export default  {
    title: 'useState demo'
}

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    const changer = (state: number) => {
        return state + 1
    }

    useEffect(() => {
        console.log('every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('first render')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('every render and change counter')
        document.title = counter.toString()
    }, [counter])

    return <>
        {counter}{fake}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setFake(fake + 1)}>+</button>
    </>
}