import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { CustomInput } from '../../Component/FormComponent/CustomInput'

export const PaymentMethodForm = () => {
    const [form, setForm] = useState({})

    const handelOnChangePaymentMethod = (e) => {
        const { name, value } = e.targert;

    }

    const handelOnAddPaymentMethod = () => {
        alert('Clicked')
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
            placeholder: 'Write information about the payment method'
        }
    ]
    return (
        <div className="d-flex justify-content-end p-4">
            <Row className="g-2 align-items-center">
                <Col md="2">
                    <Form.Group>
                        <Form.Check type='switch' name='status' label='status' />
                    </Form.Group>
                </Col>
                <Col md="6">
                    {
                        inputFields.map((item) => <CustomInput {...item} />)
                    }
                </Col>
                <Col md="2">
                    <Button className="d-flex align-items-center" onClick={handelOnAddPaymentMethod}>
                        <AiOutlinePlus /> Add Payment Method
                    </Button>
                </Col>
            </Row>
        </div>
    )
}
