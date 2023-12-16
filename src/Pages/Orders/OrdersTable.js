import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../Redux/Orders/OrderAction';
import { setOrderModal, setShowModal } from '../../Redux/Modal/ModalSlice';
import { OrderDetails } from './OrderDetails';
import { setSlectedOder } from '../../Redux/Orders/OrderSlice';

export const OrdersTable = () => {
    const dispatch = useDispatch()
    const { orders } = useSelector(state => state.orders)

    useEffect(() => {
        dispatch(getOrders(),
            [dispatch])
    })

    const handelOnClick = (item) => {
        dispatch(setShowModal(true))
        dispatch(setSlectedOder(item))
    }

    return (
        <div>
            <OrderDetails />
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Status</th>
                            <th>Name</th>
                            <th>Order Total</th>
                            <th>Payment Status</th>
                            <th>Order Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((item, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item?.status}</td>
                                    <td>{item?.buyer?.fName} {item?.buyer?.fName}</td>
                                    <td>{item?.totalAmount}</td>
                                    <td>{item?.paymentInfo?.status}</td>
                                    <td>
                                        <Button variane='info' onClick={() => handelOnClick(item?._id)}>View Details
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </div >
    )
}
