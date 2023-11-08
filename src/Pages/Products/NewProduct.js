import React from 'react'
import { AdminLayout } from '../../Layout/AdminLayout'
import { Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { CustomInput } from '../../Component/FormComponent/CustomInput'
import { useSelector } from 'react-redux'


export const NewProduct = () => {
    const navigate = useNavigate();
    const { catageory } = useSelector((state) => state.catageory);

    const handelOnClick = () => {
        navigate('/products')
    }

    const handelOnChange = () => {

    }

    const inputField = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'Product Name',
            required: true
        },
        {
            name: 'sku',
            label: 'SKU',
            type: 'text',
            placeholder: 'Product Unique Code',
            required: true
        },
        {
            name: 'price',
            label: 'Price',
            type: 'number',
            placeholder: '343',
        },
        {
            name: 'qty',
            label: 'Qty',
            type: 'number',
            placeholder: '50',
        },
        {
            name: 'salesStartDate',
            label: 'Sale Start Date',
            type: 'date',
            placeholder: '100',
        },
        {
            name: 'SalesEndDate',
            label: 'sales End Date',
            type: 'date',
            placeholder: '100',
        },
        {
            name: 'description',
            label: 'Description',
            type: 'text',
            as: 'textarea',
            rows: '5',
            placeholder: 'Description',
            required: true
        },
        {
            name: 'images',
            type: 'file',
            accept: 'images'
        }
    ]

    return (
        <AdminLayout>
            <div className="p-2 align-items-center">
                <div><BiArrowBack onClick={handelOnClick} />Back</div>
                <h1>Add New Product</h1>
            </div>
            <hr />
            <Container>

                <Form className='p-2 shadow-lg product-card' >
                    <Form.Group className='mb-2'>
                        <Form.Check name='status' type='switch' label='status' />

                    </Form.Group>
                    <Form.Select name='parentId' onChange={handelOnChange}>
                        <option value="">Select Parent Category</option>
                        {catageory.length > 0 &&
                            catageory.map((item, i) => (
                                item.parentId &&
                                (
                                    <option value={item._id}>{item.name}</option>)
                            ))
                        }
                    </Form.Select>
                    <Form.Group>

                    </Form.Group>
                    {inputField.map((item, i) =>
                        <CustomInput {...item} />)}
                </Form>
            </Container>
        </AdminLayout >

    )
}
