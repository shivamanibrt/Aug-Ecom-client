import React, { useRef, useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { resetAdminPassword } from '../../AxiosHelper/apiHelper';

export const RequestOTP = () => {
    const emailRef = useRef("");
    const [res, setResp] = useState({});

    const handelOnSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        if (email) {
            const response = await resetAdminPassword({ email });
            setResp(response);
            console.log(response);
        }
    };

    return (
        <Container>
            <div className='p-4 shadow-lg login-form'>
                <h2>Request OTP</h2>
                {res.message && (
                    <Alert variant={res.status === 'success' ? 'success' : 'danger'}>
                        {res.message}
                    </Alert>
                )}
                <hr />
                <Form onSubmit={handelOnSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            ref={emailRef}
                            label='Email'
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
