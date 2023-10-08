import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPaymentMethod } from '../../Redux/PaymentMethod/paymentMethodAction'

export const PaymentMethodTable = () => {
    const dispatch = useDispatch()
    const { paymentMethods } = useSelector((state) => state.paymentMethod)

    useEffect(() => {
        dispatch(getPaymentMethod())
    }, [dispatch]);

    return (
        <div>
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
                                <td>
                                    <Button variant='warning'>Edit</Button>{" "}
                                    <Button variant='danger'>Delete</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
