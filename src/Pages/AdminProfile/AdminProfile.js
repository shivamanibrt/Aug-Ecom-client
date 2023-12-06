import React, { useState } from 'react'
import { AdminLayout } from '../../Layout/AdminLayout'
import { Container, Form } from 'react-bootstrap'
import { CustomInput } from '../../Component/FormComponent/CustomInput';

export const AdminProfile = () => {
    const [form, setForm] = useState({});

    const inputFields = [
        {
            name: 'fName',
            value: form.fName,
            type: 'text',
            placeHolder: 'Sam',
            required: true,
        },
        {
            name: 'lName',
            value: form.lName,
            type: 'text',
            placeHolder: 'Smith',
            required: true,
        },
        {
            name: 'email',
            value: form.email,
            type: 'text',
            required: true,
            disabled: true
        },
    ]

    return (
        <AdminLayout>
            <div className='p-4 text-secondary'>
                <h3 className='dashboard_heading' >Admin </h3>
            </div>
            <Container>
                <h3>Update your profile</h3>
                <Form>
                    {
                        inputFields.map((item, index) => (
                            <CustomInput key={index} {...item} />
                        ))
                    }
                </Form>
            </Container>
        </AdminLayout>
    )
}
