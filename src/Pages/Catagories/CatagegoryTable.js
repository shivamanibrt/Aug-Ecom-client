import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCatagories } from '../../Redux/Category/PageCatageoryAction';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { deleteCataegory } from '../../AxiosHelper/apiHelper';


export const CatagegoryTable = () => {
    const dispatch = useDispatch();
    const { catageory } = useSelector((state) => state.catageory)

    useEffect(() => {
        dispatch(getAllCatagories())
    }, [dispatch])

    const handelOnDelete = (id) => {
        deleteCataegory(id)
    }
    return (
        <div>

            <Table striped bordered hover style={{ backgroundColor: '#FFFFFF' }} className="py-4 border rounded p-3 mb-2">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Name</th>
                        <th>Types</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        catageory.length > 0 &&
                        catageory.map((item, i) => (
                            <tr key={item.i}>
                                <td>{item.status}</td>
                                <td>{item.name}</td>
                                <td>{item.parentId ? 'Children' : 'Parent'}</td>
                                <td>
                                    <Button variant='warning' onClick={() => handelOnDelete(item._id)}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

        </div>
    )
}
