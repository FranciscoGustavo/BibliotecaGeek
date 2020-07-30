import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { loginUser } from '../../../actions';

const Login = ({ history, login }) => {
    console.log({ history, login });
    const [form, setForm] = useState({});

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
        axios({
            url: 'http://localhost:5000/api/auth/login',
            method: 'post',
            auth: {
                username: form.email,
                password: form.password,
            },
        })
        .then((res) => {
            console.log({
                token: res.data.token,
                cover: res.data.user.cover,
                email: res.data.user.email,
                firstName: res.data.user.firstName,
                id: res.data.user.id,
            });
            login({
                token: res.data.token,
                cover: res.data.user.cover,
                email: res.data.user.email,
                firstName: res.data.user.firstName,
                id: res.data.user.id,
            });
            history.push('/');
        })
        .catch();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" onChange={handleChange} placeholder="Excribe tu correo" />
                <input type="password" name="password" onChange={handleChange} placeholder="Escribe tu contraseña" />
                <input type="submit" value="Entrar"/>
            </form>
        </div>
    );
};

const mapDispatchToProps = {
    login: loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
