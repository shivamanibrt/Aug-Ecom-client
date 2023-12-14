import React, { useState } from 'react'
import { RequestOTP } from '../../Component/ResetPasswordComponent/RequestOTP'
import { ResetPasswordForm } from '../../Component/ResetPasswordComponent/ResetPasswordForm'
import { requestOTPPassword, resetAdminUserPassword } from '../../AxiosHelper/apiHelper'
import { Alert } from 'react-bootstrap'


export const ResetPassword = () => {
    const [passwordForm, setPasswordForm] = useState("otp")
    const [res, setResp] = useState({});
    const [userEmail, setUserEmail] = useState({})

    const handelOnOtpRequest = async (email) => {
        if (!email) {
            return alert('No email received')
        }
        setUserEmail(email)
        const response = await requestOTPPassword({ email });
        setResp(response);
        response.status === 'success' && setPasswordForm('password')
    };

    const handelOnPasswordUpdate = async (data) => {
        data.email = userEmail
        const response = await resetAdminUserPassword(data)
        setResp(response);
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
