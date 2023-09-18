import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { useSelector } from 'react-redux';

export const CatgeoryForm = () => {
    const [form, setForm] = useState({});
    const { catageory } = useSelector((state) => state.catageory)

    const handleOnChange = (e) => {
        let { checked, name, value } = e.target;
        console.log(checked);
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
        console.log(form)
    }

    return (
        <Form className="py-4 border rounded p-3 mb-2" style={{ backgroundColor: '#FFFFFF' }} onSubmit={handleOnSubmit}>
            <h4 className="mb-3">Add new Category</h4>
            <Row className="g-2 align-items-center">
                <Col md="2">
                    <Form.Group >
                        <Form.Check name="status" label="Status" type="switch" style={{ fontSize: '25px' }} onChange={handleOnChange} />
                    </Form.Group>
                </Col>
                <Col md="4">
                    <Form.Group>
                        <Form.Select name="parentId" onChange={handleOnChange}>
                            <option value="">Select Parent Category</option>
                            {catageory.length > 0 &&
                                catageory.map((item, i) => !item.parentId &&
                                    (<option key={item.id} value={item._id}>
                                        {item.name}
                                    </option>
                                    ))
                            }
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md="4">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Enter category name" name='categoryName' style={{ height: '40px' }} onChange={handleOnChange} />
                    </Form.Group>
                </Col>
                <Col md="2">
                    <Button variant="primary" type="submit" style={{ height: '40px' }}>
                        Add Category
                    </Button>
                </Col>
            </Row>

        </Form>

    );
};
