import React, { useEffect, useState } from 'react'
import '../../index.css'

function Task3() {
    const [user, setUser] = useState({
        firstName: 'Mahmudxon',
        lastName: 'Akmaljanov',
    });

    const [caunt, setCaunt] = useState(0);

    useEffect(function () {
        console.log(`hushkepsiz, ${user.firstName}!`);
    }, []);
    useEffect(function () {
        console.log('hisob :', caunt);

    }, [caunt])

    function qoshish() {
        setCaunt(function (prevCount) {
            return prevCount + 1;
        });
    }
    return (

        <div>
            <h1>3</h1>
            <h2>topshiriq 3.1</h2>
            <div className='card'>
                <h2>salom {user.firstName} {user.lastName} hushkepsiz</h2>
            </div>
            <h2>3.2</h2>
            <div>
                <h2>hisob : {caunt}</h2>
                <button style={{display: "block", margin: "auto"}} onClick={qoshish}>sanash</button>
            </div>
        </div>
    )
}

export default Task3