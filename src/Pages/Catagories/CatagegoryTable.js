import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategoriesAction, getAllCatagories } from '../../Redux/Category/PageCatageoryAction';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export const CatagegoryTable = () => {
    const dispatch = useDispatch();
    const { catageory } = useSelector((state) => state.catageory)

    useEffect(() => {
        dispatch(getAllCatagories())
    }, [dispatch])

    const handelOnDelete = (id) => {
        dispatch(deleteCategoriesAction(id))
    }

    const parentCats = catageory.filter(({ parentId }) => !parentId);
    const childCats = catageory.filter(({ parentId }) => parentId)
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
                        parentCats.length > 0 &&
                        parentCats.map((item) => (
                            <>
                                <tr key={item?._id} >
                                    <td >{item.status}</td>
                                    <td>{item.name}</td>
                                    <td style={{ backgroundColor: '#ECEE81' }}>{item.parentId ? 'Children' : 'Parent'}</td>
                                    <td>
                                        <Button variant='warning' onClick={() => handelOnDelete(item._id)}>Delete</Button>
                                    </td>
                                </tr>
                                {childCats.map((cat) => cat.parentId === item._id && (
                                    <tr key={cat._id}>
                                        <td>{cat.status}</td>
                                        <td>{cat.name}</td>
                                        <td>{cat.parentId ? 'Children' : 'Parent'}</td>
                                        <td>
                                            <Button variant='warning' onClick={() => handelOnDelete(cat._id)}>Delete</Button>
                                        </td>
                                    </tr>))
                                }
                            </>
                        ))
                    }
                </tbody>
            </Table>

        </div>
    )
}
