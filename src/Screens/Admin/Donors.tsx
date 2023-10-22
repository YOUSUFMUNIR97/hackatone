import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { fbAdd } from '../../Config/Firebasemethod';
import BAButton from '../../Componets/BAButton';
import { useNavigate } from "react-router-dom";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';


const Donors: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        fatherName: '',
        contact: '+92000-0000000',
        bloodGroup: '',
        address: '',
        city: '',
        email: '',
        gender:'',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        fbAdd("donors", formData)
            .then((res: any) => {
                console.log(res);
                navigate(`/login`)
                // setFormData({""});
            })
            .catch((err) => {
                console.log(err);
            });

    };

    return (
        <Container className='p-5'>
            <h1>INFORMATION</h1>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col className='mb-3'>
                        <TextField
                            className='mb-3'
                            label="Name"
                            name="name"
                            variant="outlined"
                            fullWidth
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                    <Col className='mb-3'>
                        <TextField
                            label="Father Name"
                            name="fatherName"
                            variant="outlined"
                            fullWidth
                            value={formData.fatherName}
                            onChange={handleInputChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className='mb-3'>
                        <TextField
                            label="City"
                            name="city"
                            variant="outlined"
                            fullWidth
                            value={formData.city}
                            onChange={handleInputChange}
                        />
                    </Col>
                    <Col className='mb-3'>
                        <TextField
                            label="Address"
                            name="address"
                            variant="outlined"
                            fullWidth
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className='mb-3'>
                        <TextField
                            label="Contact"
                            name="contact"
                            variant="outlined"
                            fullWidth
                            value={formData.contact}
                            onChange={handleInputChange}
                        />
                    </Col>
                    <Col className='mb-3'>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className='mb-3'>
                        <TextField
                            label="Blood Group"
                            name="bloodGroup"
                            variant="outlined"
                            select
                            fullWidth
                            value={formData.bloodGroup}
                            onChange={handleInputChange}
                        >
                            <MenuItem value="A+">A+</MenuItem>
                            <MenuItem value="A-">A-</MenuItem>
                            <MenuItem value="B+">B+</MenuItem>
                            <MenuItem value="B-">B-</MenuItem>
                            <MenuItem value="O+">O+</MenuItem>
                            <MenuItem value="O-">O-</MenuItem>
                            <MenuItem value="AB+">AB+</MenuItem>
                            <MenuItem value="AB-">AB-</MenuItem>-
                        </TextField>
                    </Col>
                </Row>
                <Row>
                    <Col className='mb-3'>
                    <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup name="gender" value={formData.gender} onChange={handleInputChange}>
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>

                    </Col>
                </Row>

                <Button variant="primary" type="submit" size='lg' className='mt-3'>
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default Donors;