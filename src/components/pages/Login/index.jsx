import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { loginUser } from '../../../actions';

import { Div, FormContainer, Input } from './styles';

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
            const user = {
                token: res.data.token,
                cover: res.data.user.cover,
                email: res.data.user.email,
                firstName: res.data.user.firstName,
                id: res.data.user.id,
            };
            console.log(user);
            login(user);
            localStorage.setItem('user', JSON.stringify(user));
            history.push('/');
        })
        .catch();
    };

    return (
        <Div>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <h1>Inicia Sesión</h1>
                    <Input type="text" name="email" onChange={handleChange} placeholder="Excribe tu correo" />
                    <Input type="password" name="password" onChange={handleChange} placeholder="Escribe tu contraseña" />
                    <Input type="submit" value="Entrar"/>
                </form>
            </FormContainer>
        </Div>
    );
};

const mapDispatchToProps = {
    login: loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
