import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { CustomInput } from '../../Component/FormComponent/CustomInput'
import { CustomModal } from '../../Component/ShowModal/CustomModal'
import { useDispatch } from 'react-redux'
import { postPaymentAction } from '../../Redux/PaymentMethod/paymentMethodAction'
import { setShowModal } from '../../Redux/Modal/ModalSlice'
const initialState = {
    status: "",
    name: "",
    description: "",
}

export const PaymentMethodForm = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState(initialState)

    const handelOnChange = (e) => {
        let { checked, name, value } = e.target;

        if (name === 'status') {
            value = checked ? 'active' : 'inactive'
        }
        setForm({
            ...form,
            [name]: value
        })
    }

    const handelOnSubmit = (e) => {
        e.preventDefault();
        dispatch(postPaymentAction(form)) && dispatch(setShowModal(false))
    }

    const inputFields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
            placeholder: 'Entry Payment Method Name'
        },
        {
            name: 'description',
            label: 'Description',
            type: 'text',
            as: 'textarea',
            placeholder: 'Write information about the payment method',
            style: {
                width: '300px',
                height: '100px',
            },
            required: true,
        }
    ]

    return (
        <CustomModal heading='Add new payment method'>
            <Form className=" p-1" onSubmit={handelOnSubmit}>
                <Form.Group>
                    <Form.Check type='switch' name='status' label='status' onChange={handelOnChange} />
                </Form.Group>
                {
                    inputFields.map((item, i) => <CustomInput key={i}{...item} onChange={handelOnChange} />)
                }
                <Button className="d-flex align-items-center" variant='success' onClick={handelOnSubmit}>
                    Add Payment Method
                </Button>
            </Form>
        </CustomModal>

    )
}
