import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCatagories } from '../../Redux/Category/PageCatageoryAction';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';


export const CatagegoryTable = () => {
    const dispatch = useDispatch();
    const { catageory } = useSelector((state) => state.catageory)

    useEffect(() => {
        dispatch(getAllCatagories())
    }, [dispatch])

    return (
        <div>
            <Container>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            catageory.length > 0 && catageory.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.status}</td>
                                    <td>{item.name}</td>
                                    <td>{ }</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
