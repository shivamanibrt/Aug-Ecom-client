import React, { useEffect, useState } from 'react'
import { AdminLayout } from '../../Layout/AdminLayout'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import { CustomInput } from '../../Component/FormComponent/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { updateAdminPasswordAction, updateAdminProfileAction } from '../../Redux/User/userAction';


export const AdminProfile = () => {
    const [form, setForm] = useState({});
    const [pswrd, setPswrd] = useState({});
    const [error, setError] = useState('');
    const { adminUser } = useSelector((state) => state.admin);
    const dispatch = useDispatch();


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
        const { name, value } = e.target;
        setPswrd({ ...pswrd, [name]: value });
        setError('');

        const { newPassword } = pswrd;

        // Move the validation checks outside the 'confirmNewPassword' condition
        if (name === "confirmNewPassword") {
            newPassword !== value && setError("Password and confirm password must match");
            !newPassword && setError('Password must be provided');
            newPassword.length < 6 && setError('Password must be 6 characters long');
            !/[a-z]/.test(newPassword) && setError('Password must contain lowercase');
            !/[A-Z]/.test(newPassword) && setError('Password must contain uppercase');
            !/[0-9]/.test(newPassword) && setError('Password must contain number');
        }

    }


    const handelOnProfileSubmit = (e) => {
        e.preventDefault();
        const { createdAt, emailValidationCode, password, refreshJWT, status, updatedAt, __v, email, ...rest } = form;
        dispatch(updateAdminProfileAction(rest))
    }

    const handelOnPasswordSubmit = (e) => {
        e.preventDefault();
        const { currentPassword, confirmNewPassword, newPassword } = pswrd;
        console.log(pswrd)

        if (!currentPassword || newPassword !== confirmNewPassword) {
            return alert('Either password field is empty or new password and confirm password do not match')
        }

        updateAdminPasswordAction({
            currentPassword,
            newPassword,
            _id: adminUser._id
        })
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
                    <Form onSubmit={handelOnPasswordSubmit}>
                        <CustomInput type='password' onChange={hanleOnPasswordUpdate} name='currentPassword' required={true} label='Current Password' />
                        <CustomInput type='password' onChange={hanleOnPasswordUpdate} name='newPassword' required={true} label='New Password' />
                        <Form.Text>Password must contain lowercase, uppercase, number and atlest 6 character long</Form.Text>
                        <CustomInput type='password' onChange={hanleOnPasswordUpdate} name='confirmNewPassword' required={true} label='Confirm Password' />
                        <Button type='submit' variant='warning' disabled={error}>Update Password</Button>
                    </Form>
                    {error && <Alert variant='danger'>{error}</Alert>}
                </div>

            </Container>
        </AdminLayout>
    )
}
