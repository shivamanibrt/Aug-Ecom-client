import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../../Redux/Products/productAction';

export const ProductTable = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProductsAction())
    }, [dispatch])


    const { productList } = useSelector(state => state.products)

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Sales Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((item, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.status}</td>
                                <td>{item.name}</td>
                                <td>{item.qty}</td>
                                <td>{item.salesPrice}</td>
                                <td>{item.salesStartDate} - {item.salesEndDate}</td>
                                <tr><Button variant='warning'>Edit</Button></tr>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>

    )
}
