import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../index.css'

function Task4() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Xatolik yuz berdi:', error);
            });
    }, []);

    return (
        <div className='div'>
            <h1>4</h1>
            <h2>4</h2>
            <ul>
                {
                    users.length > 0 && users.map(function (user, index) {
                        return <li key={index}>
                            <h3>{user.name}</h3> - {user.email} <br />
                            <p>Username: {user.username}</p> <br />
                            <p>Manzil: {user.address.city}, {user.address.street}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Task4