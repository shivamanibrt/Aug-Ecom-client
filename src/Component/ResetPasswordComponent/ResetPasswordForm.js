import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { CustomInput } from '../FormComponent/CustomInput'

export const ResetPasswordForm = ({ handelOnPasswordUpdate }) => {
    const [form, setForm] = useState({});
    const [error, setError] = useState("")

    const handelOnchange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setForm({ ...form, [name]: value });
        setError('')
        const { password } = form;

        if (name === "confirmPassword") {
            password !== value && setError('Password and confirm password must match')
            password.length < 6 && setError('Password must be above 6 character');
            !/[a-z]/.test(password) && setError('Password must contain lowercase');
            !/[A-Z]/.test(password) && setError('Password must contain uppercase');
            !/[0-9]/.test(password) && setError('Password must contain number');
            !password && setError('Password must be provided');
        }
        // a1234A
    }
    const handelOnSubmit = (e) => {
        e.preventDefault()
        handelOnPasswordUpdate(form)
    }

    const inputs = [
        {
            label: 'OTP',
            name: 'otp',
            type: 'number',
            placeholder: 'Check youe email for otp',
            required: true
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: '******',
            required: true
        },
        {
            label: 'Confirm Password',
            name: 'confirmPassword',
            type: 'password',
            placeholder: '******',
            required: true
        },
    ];

    return (
        <div className='login-form shadow-lg p-3'>
            <h2>Reset New Password</h2>
            <Form onSubmit={handelOnSubmit}>
                {
                    inputs.map((item, i) => (
                        <CustomInput key={i} {...item} onChange={handelOnchange} />
                    ))
                }
                <Form.Group>
                    <Form.Text>
                        Note: Password must contain number, lower and uppercase and must be longer that 6 character.
                    </Form.Text>
                </Form.Group>
                <Form.Group className='my-2'>
                    {error && <Alert variant='danger'>{error}</Alert>}
                </Form.Group>
                <Form.Group className='d-grid'>
                    <Button variant='warning' type='submit'>Update Password</Button>
                </Form.Group>
            </Form>
        </div>
    )
}
