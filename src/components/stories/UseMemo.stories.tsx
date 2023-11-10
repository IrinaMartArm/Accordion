import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const Example = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    const resultA = 1
    let resultB = 1

    const resultC = useMemo(() => {
        let tempResultA = 1
        for(let i = 1; i <= a; i++){
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a]);


    for(let i = 1; i <= b; i++){
            resultB = resultB * i
    }

    return(
        <>
            <input value={a} onChange={(e)=>setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
            <hr/>
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>
        </>
    )
}


const UsersList = (props: {users: Array<string>}) => {
    console.log('UsersList')
    return <div>
        {props.users.map(u=> <div key={u}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersList)

export  const Example2 = () => {
    console.log('Example2')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Ira', 'Suren'])

    const newUsersArray = useMemo(()=>{
        return  users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUser = [...users, 'Samo']
        setUsers(newUser)
    }

    return <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>++</button>
        {counter}
        <Users users={newUsersArray}/>
    </>
}














const BooksList = (props: {books: Array<string>; addBook: ()=>void}) => {
    console.log('UsersList')
    return <div>
        <button onClick={()=>{props.addBook()}}>add</button>
        {props.books.map(b=> <div key={b}>{b}</div>)}
    </div>
}

const Books = React.memo(BooksList)





export  const LikeUseCallBack = () => {
    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(1)
    const [books, setBooks] = useState(['React', 'Redux', 'Css'])

    const newBooksArray = useMemo(()=>{
        return  books.filter(b => b.toLowerCase().indexOf('a') > -1)
    }, [books])

    // const addBook = () => {
    //     const newBook = [...books, 'HTML']
    //     setBooks(newBook)
    // }

    // const memoBooks = useMemo(()=>{return () => {
    //     const newBook = [...books, 'HTML']
    //     setBooks(newBook)
    // }}, [books])


     const memoBooks2 = useCallback(() => {
         const newBook = [...books, 'HTML']
         setBooks(newBook)
     }, [books])



    return <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        {/*<button onClick={addUser}>++</button>*/}
        {counter}
        <Books books={newBooksArray} addBook={memoBooks2}/>
    </>
}