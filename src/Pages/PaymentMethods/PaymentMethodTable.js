import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deletePaymentAction, getPaymentAction } from '../../Redux/PaymentMethod/paymentMethodAction'
import { PaymentMethodForm } from './PaymentMethodForm'
import { EditPaymentMethodForm } from './EditPaymentMethodForm'
import { setSelectedPm } from '../../Redux/PaymentMethod/paymentMethodSlice'

export const PaymentMethodTable = ({ showForm, handelOnClick }) => {
    const dispatch = useDispatch()
    const { paymentMethods } = useSelector((state) => state.paymentMethod)

    useEffect(() => {
        dispatch(getPaymentAction())
    }, [dispatch]);

    const handelOnDelete = (_id) => {
        if (window.confirm('Are you sure you want to delete this item')) {
            dispatch(deletePaymentAction(_id))
        }
    }

    const handelOnEdit = (item) => {
        dispatch(setSelectedPm(item))
        handelOnClick('edit')
    }

    const pmForm = {
        add: <PaymentMethodForm />,
        edit: <EditPaymentMethodForm />,
    }

    return (
        <div>
            {pmForm[showForm]}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paymentMethods.map((item, i) => (
                            <tr key={item._id}>
                                <td>{i + 1}</td>
                                <td>{item.status}</td>
                                <td>{item.name}</td>
                                <td className='d-flex justify-content-between'>
                                    <Button variant='warning' onClick={() => handelOnEdit(item)}>Edit</Button>
                                    <Button variant='danger' onClick={() => handelOnDelete(item._id)}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

