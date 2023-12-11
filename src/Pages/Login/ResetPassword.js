import React from 'react'
import { RequestOTP } from '../../Component/ResetPasswordComponent/RequestOTP'
import { ResetPasswordForm } from '../../Component/ResetPasswordComponent/ResetPasswordForm'

export const ResetPassword = () => {
    const showForm = 'otp'//password
    const form = {
        otp: <RequestOTP />,
        password: <ResetPasswordForm />
    }
    return (
        <div className='email-cerification'>
            {
                form[showForm]
            }
        </div>
    )
}
