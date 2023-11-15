import React, { useEffect, useState } from 'react'
import { AdminLayout } from '../../Layout/AdminLayout'
import { Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { CustomInput } from '../../Component/FormComponent/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCatagories } from '../../Redux/Category/PageCatageoryAction'

const initialState = {
    status: 'inactive',
    name: '',
    catId: null,
    sku: '',
    qty: '',
    price: 0,
    salesPrice: null,
    salesStartDate: null,
    salesEndDate: null,
    description: '',
}

export const NewProduct = () => {
    const [form, setForm] = useState(initialState);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { catageory } = useSelector((state) => state.catageory);

    useEffect(() => {
        !catageory.length && dispatch(getAllCatagories());
    }, [dispatch, catageory]);

    const handelOnClick = () => {
        navigate('/products')
    }

    const handelOnChange = () => {

    }

    const inputField = [
        {
            name: 'name',
            value: form.name,
            label: 'Name',
            type: 'text',
            placeholder: 'Product Name',
            required: true
        },
        {
            name: 'sku',
            value: form.sku,
            label: 'SKU',
            type: 'text',
            placeholder: 'Product Unique Code',
            required: true
        },
        {
            name: 'price',
            value: form.price,
            label: 'Price',
            type: 'number',
            placeholder: '343',
        },
        {
            name: 'qty',
            value: form.qty,
            label: 'Qty',
            type: 'number',
            placeholder: '50',
        },
        {
            name: 'salesStartDate',
            value: form.salesStartDate,
            label: 'Sales Start Date',
            type: 'date',
            placeholder: '100',
        },
        {
            name: 'SalesEndDate',
            value: form.salesEndDate,
            label: 'sales End Date',
            type: 'date',
            placeholder: '100',
        },
        {
            name: 'description',
            value: form.description,
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

                <Form className='p-3 shadow-lg product-card mb-2' >
                    <Form.Group className='mb-2'>
                        <Form.Check
                            name='status'
                            type='switch'
                            label='status'
                            checked={form.status === 'active'}
                            onChange={handelOnChange}
                        />
                    </Form.Group>
                    <Form.Select name='catId' onChange={handelOnChange} required>
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
                        <CustomInput key={i} {...item}
                            onChange={handelOnChange} />)
                    }
                </Form>
            </Container>
        </AdminLayout >

    )
}
