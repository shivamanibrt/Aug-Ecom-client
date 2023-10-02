import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
import { CustomModal } from '../../Component/ShowModal/CustomModal';
import { updateCategoriesAction } from '../../Redux/Category/PageCatageoryAction';
import { setShowModal } from '../../Redux/Modal/ModalSlice';

const initialState = {
    status: 'inactive',
    name: '',
    parentId: null
}
export const EditCategories = ({ selectedCat }) => {
    const [form, setForm] = useState(initialState);
    const { catageory } = useSelector((state) => state.catageory)
    const dispatch = useDispatch()

    useEffect(() => {
        setForm(selectedCat)
    }, [selectedCat])

    const handleOnChange = (e) => {
        let { checked, name, value } = e.target;
        if (name === 'status') {
            value = checked ? 'active' : 'inactive';
        }
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        const { createdAt, updatedAt, __v, slug, ...rest } = form;
        dispatch(updateCategoriesAction(rest));
        dispatch(setShowModal(false))
    }

    return (
        <CustomModal heading='Edit Categories'>
            <Form onSubmit={handleOnSubmit} className=''>
                <Row className="g-2 align-items-center">
                    <Col md="2">
                        <Form.Group >
                            <Form.Check name="status" label="Status" type="switch" style={{ fontSize: '20px' }} onChange={handleOnChange} checked={form.status === 'active'} />
                        </Form.Group>
                    </Col>
                    <Col md="4">
                        <Form.Group>
                            <Form.Select name="parentId" onChange={handleOnChange}>
                                <option value="">Select Parent Category</option>
                                {catageory.length > 0 &&
                                    catageory.map((item, i) => !item.parentId &&
                                        (<option key={item.id} value={item._id} selected={item._id === form.parentId}>
                                            {item.name}
                                        </option>
                                        ))
                                }
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md="4">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter category name" name='name' style={{ height: '40px' }} onChange={handleOnChange} required value={form.name} />
                        </Form.Group>
                    </Col>
                    <Col md="2">
                        <Button variant="primary" type="submit" style={{ height: '40px' }}>
                            Update
                        </Button>
                    </Col>
                </Row>

            </Form >
        </CustomModal >

    );
};
