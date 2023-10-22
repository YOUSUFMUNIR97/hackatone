import React from 'react'
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuth, fbLogin, socialMediaAuth } from '../Config/Firebasemethod';
import { fbSigup } from '../Config/Firebasemethod';
import SMSelect from '../Componets/SMSelect';




const Signup = () => {

    const [model, setmodel] = useState<any>({})

    const navigate = useNavigate()

    const signupuser = () => {
        console.log(model);
        fbSigup(model).then((
            res => { navigate("/login") }
        )).catch((err) => {
            console.log(err)
        })
    }

    const login = () => {
        navigate('../login')
    }


    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-2 text-center">Sign Up</h2>


                            <MDBInput onChange={(e: any) => setmodel({ ...model, username: e.target.value })}
                                wrapperClass='mb-4 w-100' label='User Name' id='formControlLg' type='username' size="lg" />

                            <MDBInput onChange={(e: any) => setmodel({ ...model, email: e.target.value })}
                                wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" />

                            <MDBInput onChange={(e: any) => setmodel({ ...model, cnic: e.target.value })}
                                wrapperClass='mb-4 w-100' label='CNIC No' id='formControlLg' type='cnic' size="lg" />

                            <MDBInput onChange={(e: any) => setmodel({ ...model, password: e.target.value })}
                                wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />

                            <SMSelect
                             getValue={(e: any) => setmodel({ ...model, role: e.target.value })}
                                label='Role'
                                options={[
                                    {
                                        value: '',
                                        displayName: ''
                                    },
                                    {
                                        value: 'Donors',
                                        displayName: 'Donors'
                                    },
                                    {
                                        value: 'Acceptors',
                                        displayName: 'Acceptors'
                                    },
                                ]} />

                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                            <MDBBtn size='lg' onClick={()=>signupuser()}>
                                Signup
                            </MDBBtn>

                            <hr className="my-4" />
                            
                            <p>Already Have an Account? <Link to='/login'>Click Here</Link></p>
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default Signup
