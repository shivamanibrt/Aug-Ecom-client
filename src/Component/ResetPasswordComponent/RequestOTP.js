import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { CustomInput } from '../FormComponent/CustomInput'

export const RequestOTP = () => {
    return (
        <Container>
            <div className='p-4 shadow-lg login-form'>
                <h2>Request OTP</h2>
                <hr />
                <Form>
                    <CustomInput
                        label='Email'
                        name='email'
                        type='email'
                        placeholder='your@email.com'
                    />
                    <Form.Group className='d-grid gap-2'>
                        <Button variant='primary' type='submit'>Request OTP</Button>
                    </Form.Group>
                </Form>
            </div>
        </Container>
    )
}
