import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import './styles.css'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

const LoginPage = () => {
    const { authenticated, login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // intercepta o evento de submit
        console.log('submit', { email, password });

        login(email, password); // integracao com meu contexto e a API
    }
    return (
        <div id="login">
            <div className='d-flex flex-row ps-5 pt-5'>
                <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
                <span className="h1 fw-bold mb-0">Logo</span>
            </div>

            <form onSubmit={handleSubmit}>    
            <MDBInput
                    className='mb-4'
                    type="email" 
                    name="email" 
                    label="E-mail"
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                    className='mb-4'
                    type="password"
                    label="Senha"
                    name="password"
                    id="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <MDBBtn type='submit' block>
                    Entrar
                </MDBBtn>

                <div className='text-center'>
                    <p>
                    Não tem cadastro? <a href='/register'>Registre-ser</a>
                    </p>
                </div>

            </form>
        </div>
    );
};

export default LoginPage;

{/* 
            <h1 className="title">Login do Sistema</h1>
            
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form> */}