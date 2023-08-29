import React, { useState } from 'react'
import { CustomInput } from '../../Component/FormComponent/CustomInput';
import { Button, Container, Form } from 'react-bootstrap';

export const Login = () => {
    const [form, setForm] = useState({});

    const handelOnChange = e => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    }
    const handelOnSubmit = async (e) => {
        e.preventDefault();

        console.log(form)
    }
    const inputs = [
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'johnDoe@gmail.com',
            required: true
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: '******',
            required: true
        },
    ];

    return (
        <div >
            <Container className='d-flex align-items-center text-secondary justify-content-center p-5'>
                <Form className='p-5 shadow-lg m-auto login-form'
                    style={{ width: '450px', backgroundColor: 'white' }}
                    onSubmit={handelOnSubmit}>
                    <h4 className='text-dark fw-bolder mb-3 text-center'>Login</h4>
                    <div className='mt-2'>
                        {inputs.map((item, i) => (
                            <CustomInput key={i} {...item} onChange={handelOnChange} />
                        ))}
                    </div>
                    <div className='d-grid'>
                        <Button variant='primary' className='login-page-button' style={{ border: '0' }} type='submit'>Login</Button>
                    </div>

                    <div className='text-center mt-4'>
                        <p>Or Sign Up using</p>
                        <p className='text-secondary signUp-btn' onClick={"signUpFunciton"}>SIGN UP</p>
                    </div>
                </Form>
            </Container>
        </div >
    )
}
