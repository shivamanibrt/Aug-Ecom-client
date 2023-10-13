import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { CustomInput } from '../../Component/FormComponent/CustomInput'
import { CustomModal } from '../../Component/ShowModal/CustomModal'
import { useDispatch, useSelector } from 'react-redux'
import { updatePaymentAction } from '../../Redux/PaymentMethod/paymentMethodAction'
import { setShowModal } from '../../Redux/Modal/ModalSlice'

const initialState = {
    status: "",
    name: "",
    description: "",
}

export const EditPaymentMethodForm = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState(initialState)
    const { selectPM } = useSelector((state) => state.paymentMethod)


    useEffect(() => {
        setForm(selectPM)
    }, [selectPM])

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

    const handelOnUpdate = (e) => {
        e.preventDefault();
        const { createdAt, updatedAt, __v, ...rest } = form;
        dispatch(updatePaymentAction(rest)) && dispatch(setShowModal(false))
    }

    const inputFields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
            placeholder: 'Entry Payment Method Name',
            value: form?.name
        },
        {
            name: 'description',
            label: 'Description',
            type: 'text',
            as: 'textarea',
            placeholder: 'Write information about the payment method',
            required: true,
            value: form?.description
        }
    ]

    return (
        <CustomModal heading='Edit payment method'>
            <Form className=" p-1" onSubmit={handelOnUpdate}>
                <Form.Group>
                    <Form.Check type='switch' name='status' label='status' onChange={handelOnChange} checked={form.status === 'active'} />
                </Form.Group>
                {
                    inputFields.map((item, i) => <CustomInput key={i}{...item} onChange={handelOnChange} />)
                }
                <Button className="d-flex align-items-center" variant='success' type='submit'>
                    Update Payment Method
                </Button>
            </Form>
        </CustomModal>

    )
}
