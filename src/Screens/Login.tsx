import React from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuth, fbLogin, socialMediaAuth } from '../Config/Firebasemethod';
import {
    googleProvider,
} from "../Config/Firebasemethod";


const Login = () => {

    const [model, setmodel] = useState<any>({})

    const navigate = useNavigate()

    const loginUser = () => {
        console.log(model);
        fbLogin(model).then((
            (res: any) => {
                if (res.role === "Donors") { navigate('/donors') }

                else if (res.role === "Acceptors") {
                    navigate('/acceptors')
                }
                else {  
                    navigate('/admin')
                }
            }
        )).catch((err) => {
            console.log(err)
        })
    }
 
    const signup = () => {
        navigate('../Signup')
    }


    const handleOnClick = (provider: any) => {
        socialMediaAuth(provider).then((
            (res: any) => { navigate("/dashboard") }
        )).catch((err: any) => {
            console.log(err)
        })
    };



    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                            <p className="text-white-50 mb-3">Please enter your login and password!</p>

                            <MDBInput onChange={(e: any) => setmodel({ ...model, email: e.target.value })}
                                wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" />

                            <MDBInput onChange={(e: any) => setmodel({ ...model, password: e.target.value })}
                                wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />

                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                            <MDBBtn size='lg' onClick={loginUser}>
                                Login
                            </MDBBtn>

                            <hr className="my-4" />
                            <p>Don't Have a Account <Link to='/signup'>Click Here</Link></p>


                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default Login
