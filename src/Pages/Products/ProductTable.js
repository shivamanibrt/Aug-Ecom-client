import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../../Redux/Products/productAction';
import { useNavigate } from 'react-router-dom';

export const ProductTable = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getProductsAction())
    }, [dispatch])

    const { productList } = useSelector(state => state.products);

    const handelOnModify = (id) => {
        navigate(`/modifyPage/${id}`);
    }

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Thumbnail</th>
                        <th>Status</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Sales Price</th>
                        <th>Sales Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((item, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>
                                    {<img src={'http://localhost:8000/' + item.thumbnail} alt='' crossOrigin='anonymus' width={'130px'} />}
                                </td>

                                <td>{item.status}</td>
                                <td>{item.name}</td>
                                <td>{item.qty}</td>
                                <td>{item.price}</td>
                                <td>{item.salesPrice}</td>
                                <td>{item.salesStartDate && item.salesStartDate.substr(0, 10)}
                                    {item.salesStartDate ? ' To' : '-'}    {item.salesEndDate && item.salesEndDate.substr(0, 10)}</td>
                                <tr><Button variant='warning' onClick={() => { handelOnModify(item._id) }}>Update</Button></tr>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container >

    )
}
