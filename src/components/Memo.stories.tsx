import React, {useState} from "react";

export default {
    title: 'ReactMemo'
}

const Counter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersList = (props: {users: Array<string>}) => {
    return <div>
        {props.users.map(u=> <div key={u}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersList)

export  const Example = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Ira', 'Suren'])

    const addUser = () => {
        const newUser = [...users, 'Samo']
        setUsers(newUser)
    }

    return <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>++</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
}