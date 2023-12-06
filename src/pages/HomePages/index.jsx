import React, {useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import ButtonAppBar from '../../components/Header';
import { getUsers } from "../../services/api";
import spinnerLoading from '../../assets/spinner.gif';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Divider from '@mui/joy/Divider';

const HomePage = () => {
    const [listUsers, setlistUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [teste, setTeste] = useState(false);
    
    useEffect(() => {
        (async () => {
            const response = await getUsers();
            setlistUsers(response.data);
            setLoading(false);
        })();
    }, [])

    useEffect(() => {
        if(count == 5){
            setTeste(true)
        }
        console.log('Quantas vezes?')
    }, [count])

    useEffect(() => {
        console.log('teste')
    }, [])

    if(loading){
        return <div className="loading"><img src={spinnerLoading} /></div>
    }

    return (
        <>
            <ButtonAppBar />
            <h1>HomePage</h1>
            <Divider orientation="horizontal" />

            <button onClick={()=> setCount(count => count + 1)} > {count} </button>

            {teste && 
                <h2> TESTE</h2>
            }
        
            {/* <p>{String(authenticated)}</p> */}
            <ul>
                {
                    listUsers.user.map((user) => (
                        <li key={user._id}>
                            {user._id} - {user.email}
                        </li>
                    ))
                }
            </ul>

            <MDBCarousel showIndicators showControls fade>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                alt='...'
            >
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                alt='...'
            >
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                alt='...'
            >
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </MDBCarouselItem>
            </MDBCarousel>
        </>
    )
};

export default HomePage;