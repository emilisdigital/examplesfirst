import React, {useMemo, useState} from 'react';

export default {
    title: 'React/memo demo',
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('Users')
    return <div>{
        props.users.map((u, i) => <div>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('example')
    const [counter,setCounter] = useState(0)
    const [users,setUsers] = useState(["Dimych", "Valera", "Artem"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <NewMessagesCounter count={counter}/>
        <Users users={newArray}/>
    </>
}
