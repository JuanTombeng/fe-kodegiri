import React, {useState} from "react";
import "../App.css"


const Login = () => {
    const [display, setDisplay] = useState('d-flex')
    const [userData, setUserData] = useState(null)
    const [form, setForm] = useState({
        username : '',
        password : ''
    })
    const handleOnChange = (e) => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const handleLogin = () => {
        if (form.username == '' || form.password == '') {
            alert('Username / Password cannot be empty')
        } else {
            const userLogin = localStorage.setItem('user', JSON.stringify(form))
            console.log(userLogin)
            setUserData(form.username)
            setDisplay('d-none')
        }
    }

    const handleLogout = () => {
        localStorage.clear()
        setDisplay('d-flex')
        setUserData(null)
        setForm({
            username : '',
            password : ''
        })
    }
    return (
        <>
            <div className="container d-flex align-items-center">
                <div className="login-wrapper d-flex flex-column justify-content-center">
                    <div className={`${display} flex-column`}>
                        <label htmlFor="username">Username :</label>
                        <input type="text" name="username" value={form.username} onChange={handleOnChange}/>
                        <label htmlFor="username">Password :</label>
                        <input type="password" name="password" value={form.password} onChange={handleOnChange}/>
                        <button className="btn mt-5" onClick={handleLogin}>Login</button>
                    </div>
                    {
                        userData == null ? null : (
                            <div className="d-flex flex-column">
                                <div className="banner">Welcome, {userData}</div>
                                <button className="btn mt-5" onClick={handleLogout}>Log Out</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Login