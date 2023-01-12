import React from 'react';
import './styles.css'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  } from 'mdb-react-ui-kit';

function RegisterPage() {
  return (

    <div id="login">
        <form>
            <MDBRow className='mb-4'>
            <MDBCol>
                <MDBInput id='form3Example1' label='Nome' />
            </MDBCol>
            <MDBCol>
                <MDBInput id='form3Example2' label='E-mail' />
            </MDBCol>
            </MDBRow>
            <MDBInput className='mb-4' type='password' id='form3Example4' label='Senha' />
            <MDBInput className='mb-4' type='password' id='form3Example4' label='Repetir senha' />


            <MDBBtn type='submit' className='mb-4' block>
                Registrar
            </MDBBtn>

            <MDBBtn type='submit' className='mb-4' block>
                voltar
            </MDBBtn>
        </form>
    </div>
  );
}

export default RegisterPage;

