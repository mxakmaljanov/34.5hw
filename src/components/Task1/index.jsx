import React, { useState } from 'react'
import Button from '../Button'
import '../../index.css'

function Task1() {

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        gmail: ''
    })
    const [form2, setForm2] = useState({
        name: '',
        price: '',
        catagori: ''
    })
    
    function handleSubmit(e) {
        e.preventDefault()

        console.log(form);

    }
  
    function handleSubmit2(e) {
        e.preventDefault()

        console.log(form2);

    }
    return (

        <>
           
            <h2>topshiriq 1.1</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Enter first name'
                    value={form.lastName}
                    onChange={(e) => {
                        setForm({ ...form, lastName: e.target.value })
                    }}
                />
                <input
                    type="text"
                    placeholder='Enter last name'
                    value={form.firstName}
                    onChange={(e) => {
                        setForm({ ...form, firstName: e.target.value })
                    }}
                />
                <input
                    type="email"
                    placeholder='Enter gmail'
                    value={form.gmail}
                    onChange={(e) => {
                        setForm({ ...form, gmail: e.target.value })
                    }}
                />
                <Button></Button>
            </form>
            <h2>1.2</h2>
            <form onSubmit={handleSubmit2}>
                <input
                    type="text"
                    placeholder='mahsulot nomi:'
                    value={form2.name}
                    onChange={(e) => {
                        setForm2({ ...form2, name: e.target.value })
                    }}
                />
                <input
                    type="text"
                    placeholder='mahsulot narxi:'
                    value={form2.price}
                    onChange={(e) => {
                        setForm2({ ...form2, price: e.target.value })
                    }}
                />
                <select
                    value={form2.catagori}
                    onChange={(e) => {
                        setForm2({ ...form2, catagori: e.target.value })
                    }}>
                    <option >1</option>
                    <option >2</option>
                    <option >3</option>
                </select>
                <Button></Button>
            </form>
        </>

    )
}

export default Task1