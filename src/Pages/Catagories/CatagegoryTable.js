import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategoriesAction, getAllCatagories } from '../../Redux/Category/PageCatageoryAction';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { setShowModal } from '../../Redux/Modal/ModalSlice';
import { EditCategories } from './EditCategories';

export const CatagegoryTable = () => {
    const [selectedCat, setSelectedCat] = useState({})
    const dispatch = useDispatch();
    const { catageory } = useSelector((state) => state.catageory);

    useEffect(() => {
        dispatch(getAllCatagories());
    }, [dispatch]);

    const handelOnDelete = (id) => {
        dispatch(deleteCategoriesAction(id));
    };
    const handelOnEdit = (cat) => {
        setSelectedCat(cat)
        dispatch(setShowModal(true))
    };

    const parentCats = catageory.filter(({ parentId }) => !parentId);
    const childCats = catageory.filter(({ parentId }) => parentId);

    return (
        <div>
            <EditCategories selectedCat={selectedCat} />
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
                    {parentCats.length > 0 &&
                        parentCats.map((item) => (
                            <React.Fragment key={item?._id}>
                                <tr className='bg-info'>
                                    <td className={item?.status === 'active' ? 'text-success' : 'text-danger'}>{item.status}</td>
                                    <td>{item.name}</td>
                                    <td style={{ backgroundColor: '#96B6C5' }}>{item.parentId ? 'Children' : 'Parent'}</td>
                                    <td className='d-flex gap-2 justify-content-center'>
                                        <Button variant='warning' onClick={() => handelOnDelete(item._id)}>Delete</Button>
                                        <Button variant='primary' onClick={() => handelOnEdit(item)}>Edit</Button>
                                    </td>
                                </tr>
                                {childCats.map((cat) => cat.parentId === item._id && (
                                    <tr key={cat._id}>
                                        <td className={cat.status === 'active' ? 'text-success' : 'text-danger'}>{cat.status}</td>
                                        <td>{cat.name}</td>
                                        <td>{cat.parentId ? 'Children' : 'Parent'}</td>
                                        <td className='d-flex gap-2 justify-content-center'>
                                            <Button variant='warning' onClick={() => handelOnDelete(cat._id)}>Delete</Button>
                                            <Button variant='primary' onClick={() => handelOnEdit(cat)}>Edit</Button>
                                        </td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                </tbody>
            </Table>
        </div>
    );
};
