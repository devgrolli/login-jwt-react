import React, { useState, useContext } from "react";
import AlertToast from "../../components/Alert/index";
import { AuthContext } from "../../contexts/auth";
import Divider from '@mui/joy/Divider';
import './styles.css'
import { MDBInput, MDBCol, MDBRow, MDBBtn } from 'mdb-react-ui-kit';

function RegisterPage() {
  const { signIn } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(name, email, password, confirmPassword).catch((err) => { setError(err) })
  }

  return (
      <div id="login">
        {error && 
          <>
            <AlertToast msg= {error?.response.data.msg} />
            <br />
          </>
        }
        <div id="label-cadastro">
          <span className="h1 fw-bold mb-0">Cadastro</span>
        </div>

        <form onSubmit={handleSubmit}>
            <MDBRow className='mb-4'>
              <MDBCol>
                <MDBInput
                  id='name'
                  label='Nome'
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                />
              </MDBCol>
            <MDBCol>
              <MDBInput
                id='email'
                label='E-mail'
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </MDBCol>
            </MDBRow>
            <MDBInput
              className='mb-4'
              type='password'
              id='repetPassword'
              label='Senha'
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
            <MDBInput
              className='mb-4'
              type='password'
              id='password'
              label='Repetir senha'
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <MDBBtn type='submit' className='mb-4' block>
                Registrar
            </MDBBtn>
            <Divider />

            <div id="link-voltar" className='text-center'>
              <a href='/login'>Voltar</a>
            </div>
        </form>
    </div>
  );
}

export default RegisterPage;

