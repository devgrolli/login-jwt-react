import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import './styles.css'
import { MDBInput, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import AlertToast from "../../components/Alert/index";

const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password).catch((err) => {setError(err) })
    }
    return (
        <div id="login">
            <div>
                <span className="h1 fw-bold mb-0">Login</span>
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
                <MDBBtn type='submit' block> Entrar </MDBBtn>
                <div className='text-center'>
                    <br /><p> Não tem cadastro? <a href='/register'>Registre-se</a></p>
                </div>
            </form>

            {error && <AlertToast msg= {error?.response.data.msg} />}
        </div>
    );
};

export default LoginPage;
