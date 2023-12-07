import React, { useEffect, useState } from 'react'
import { AdminLayout } from '../../Layout/AdminLayout'
import { Button, Container, Form } from 'react-bootstrap'
import { CustomInput } from '../../Component/FormComponent/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { updateAdminProfileAction } from '../../Redux/User/userAction';

export const AdminProfile = () => {
    const [form, setForm] = useState({});
    const [password, setPassword] = useState({});
    const { adminUser } = useSelector((state) => state.admin);
    const dispatch = useDispatch()

    useEffect(() => {
        adminUser?._id && setForm(adminUser)
    }, [adminUser])

    const inputFields = [
        {
            name: 'fName',
            value: form.fName,
            label: 'First Name',
            type: 'text',
            placeHolder: 'Sam',
            required: true,
        },
        {
            name: 'lName',
            value: form.lName,
            type: 'text',
            label: 'Last Name',
            placeHolder: 'Smith',
            required: true,
        },
        {
            name: 'email',
            value: form.email,
            type: 'text',
            label: 'Email',
            required: true,
            disabled: true
        },
        {
            name: 'phone',
            value: form.phone,
            label: 'Phone',
            type: 'text',
            required: true,
        },
        {
            name: 'address',
            value: form.address,
            label: 'Address',
            type: 'text',
        },
        {
            name: 'dob',
            value: form.dob ? form.dob.slice(0, 10) : null,
            label: 'DOB',
            type: 'date',
        },

    ]
    const hanleOnProfileUpdate = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const hanleOnPasswordUpdate = (e) => {
        const { name, value } = e.target
    }

    const handelOnProfileSubmit = (e) => {
        e.preventDefault();
        const { createdAt, emailValidationCode, password, refreshJWT, status, updatedAt, __v, email, ...rest } = form

        dispatch(updateAdminProfileAction(rest))
    }

    return (
        <AdminLayout>
            <div className='p-4 text-secondary'>
                <h3 className='dashboard_heading' >Admin </h3>
            </div>
            <Container>
                <h3>Update your profile</h3>
                <Form onSubmit={handelOnProfileSubmit}>
                    {
                        inputFields.map((item, index) => (
                            <CustomInput key={index} {...item} onChange={hanleOnProfileUpdate} />
                        ))
                    }
                    <Button type='submit' variant='warning'>Update Profile</Button>
                </Form>
                <hr />
                <div className='mt-2 py-2' >
                    <h5>Update Password</h5>
                    <Form>
                        <CustomInput type='password' name='password' required={true} label='Current Password' />
                        <CustomInput type='password' name='newPassword' required={true} label='New Password' />
                        <CustomInput type='password' name='confirmPassword' required={true} label='Confirm Password' />
                    </Form>
                    <Button type='submit' variant='warning'>Update Password</Button>
                </div>

            </Container>
        </AdminLayout>
    )
}
