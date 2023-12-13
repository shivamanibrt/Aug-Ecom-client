import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';


export const RequestOTP = ({ handelOnOtpRequest }) => {
    const emailRef = useRef("");

    const handelOnSubmit = e => {
        e.preventDefault();
        handelOnOtpRequest(emailRef.current.value)
    }

    return (
        <Container>
            <div className='p-4 shadow-lg login-form'>
                <h2>Request OTP</h2>
                <hr />
                <Form onSubmit={handelOnSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            ref={emailRef}
                            name='email'
                            type='email'
                            placeholder='your@email.com'
                            required={true}
                        />
                    </Form.Group>
                    <Form.Group className='d-grid gap-2'>
                        <Button variant='primary' type='submit'>Request OTP</Button>
                    </Form.Group>
                </Form>
            </div>
        </Container>
    );
};
