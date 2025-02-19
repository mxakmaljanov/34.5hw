import React, { useRef } from 'react'
import Button from '../Button'
import '../../index.css'

function Task2() {
    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const gmail = useRef()
    const password = useRef()
    function handleSubmit(e) {
        e.preventDefault()

        console.log('name :', firstnameRef.current.value);
        console.log('last :', lastnameRef.current.value);
    }
    function handleSubmit2(e) {
        e.preventDefault()
        console.log('email :', gmail.current.value);
        console.log('parol :', password.current.value);
    }

    return (
        <div>
            <h2> 2.1</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='enter firstname'
                    ref={firstnameRef}
                />
                <input
                    type="text"
                    placeholder='enter lastname'
                    ref={lastnameRef}
                />
                <Button></Button>
            </form>
            <h2>topshiriq 2.2</h2>
            <form onSubmit={handleSubmit2}>
                <input
                    type="email"
                    placeholder='enter email'
                    ref={gmail}
                />
                <input
                    type="password"
                    placeholder='enter password'
                    ref={password}
                />
                <Button></Button>
            </form>
        </div>
    )
}

export default Task2