import React, { useState } from 'react'
import { RequestOTP } from '../../Component/ResetPasswordComponent/RequestOTP'
import { ResetPasswordForm } from '../../Component/ResetPasswordComponent/ResetPasswordForm'
import { resetAdminPassword } from '../../AxiosHelper/apiHelper'
import { Alert } from 'react-bootstrap'


export const ResetPassword = () => {
    const [passwordForm, setPasswordForm] = useState("password")
    const [res, setResp] = useState({});

    const handelOnOtpRequest = async (email) => {
        if (!email) {
            return alert('No email received')
        }
        const response = await resetAdminPassword({ email });
        setResp(response);
        response.status === 'success' && setPasswordForm('password')
    };

    const handelOnPasswordUpdate = (data) => {
        console.log(data)
    }

    const form = {
        otp: <RequestOTP handelOnOtpRequest={handelOnOtpRequest} />,
        password: <ResetPasswordForm handelOnPasswordUpdate={handelOnPasswordUpdate} />
    }

    return (
        <div className='email-cerification'>
            {res.message && (
                <Alert variant={res.status === 'success' ? 'success' : 'danger'}>
                    {res.message}
                </Alert>
            )}

            {
                form[passwordForm]
            }
        </div>
    )
}
