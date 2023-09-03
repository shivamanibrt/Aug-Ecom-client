import React, { useState } from 'react'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import { CustomInput } from '../../Component/FormComponent/CustomInput'
import { toast } from 'react-toastify';
import { postUser } from '../../AxiosHelper/apiHelper';

export const Register = () => {
    const [form, setForm] = useState({});
    const [resp, setResp] = useState({});

    const handelOnchange = e => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const handelOnSubmit = async (e) => {
        try {
            e.preventDefault();

            const { confirmPassword, ...rest } = form;
            if (confirmPassword !== rest.password) {
                return alert('Password do not match')
            }
            const result = await postUser(rest)
            setResp(result)
        } catch (error) {
            toast.error(error.message)
        }
    }

    const inputs = [
        {
            label: 'First Name',
            name: 'fName',
            type: 'text',
            placeholder: 'Doe',
            required: true
        },
        {
            label: 'Last Name',
            name: 'lName',
            type: 'text',
            placeholder: 'Doe',
            required: true
        },
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'johnDoe@email.com',
            required: true
        },
        {
            label: 'Phone',
            name: 'phone',
            type: 'string',
            placeholder: '04********',
            required: true
        },
        {
            label: 'DOB',
            name: 'dob',
            type: 'date',
            placeholder: '',
            required: true
        },
        {
            label: 'Address',
            name: 'address',
            type: 'string',
            placeholder: '1 Gorge st Sydney',
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
        }
    ]
    return (
        <div className='signUp-page'>
            <Container className='d-flex align-items-center text-secondary justify-content-center p-5' >
                <Form className='p-5 shadow-lg m-auto login-form'
                    style={{ width: '450px', backgroundColor: 'white' }} onSubmit={handelOnSubmit}>
                    <h4 className='text-dark fw-bolder mb-3 text-center'>Admin Registration</h4>
                    {
                        resp.message && (
                            <Alert variant={resp.status === 'success' ? 'success' : 'danger'} >
                                {resp.message}
                            </Alert>
                        )
                    }

                    <div className='mt-2' >
                        {
                            inputs.map((item, i) => (
                                <CustomInput key={i} {...item} onChange={handelOnchange} />
                            ))
                        }
                    </div>
                    <div className='d-grid'>
                        <Button variant='primary' type='submit'> Sign Up</Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}
