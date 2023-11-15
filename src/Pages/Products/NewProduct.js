import React, { useEffect, useState } from 'react'
import { AdminLayout } from '../../Layout/AdminLayout'
import { Button, Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { CustomInput } from '../../Component/FormComponent/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCatagories } from '../../Redux/Category/PageCatageoryAction'
import { postProductsAction } from '../../Redux/Products/productAction'

const initialState = {
    status: 'inactive',
    name: '',
    catId: null,
    sku: '',
    qty: '',
    price: 0,
    salesEndDate: null,
    salesPrice: null,
    salesStartDate: null,
    description: '',
}

export const NewProduct = () => {
    const [form, setForm] = useState(initialState);
    const [images, setImages] = useState([])
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { catageory } = useSelector((state) => state.catageory);

    useEffect(() => {
        !catageory.length && dispatch(getAllCatagories());
    }, [dispatch, catageory]);

    const handelOnClick = () => {
        navigate('/products')
    }

    const handelOnChange = (e) => {
        let { checked, name, value } = e.target;

        if (name === 'status') {
            value = checked ? 'active' : 'inactive';
        }

        setForm({
            ...form,
            [name]: value
        });
    }

    const handelOnSumbit = (e) => {
        e.preventDefault()

        //set data with dormData
        const formData = new FormData();
        for (const key in form) {
            formData.append(key, form[key])
        }

        //append images 
        images.length && [...images].map((img) => formData.append('images', img))

        dispatch(postProductsAction(form))
    }

    const handelOnImageSelect = e => {
        const { files } = e.target;
        setImages(files);
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
            name: 'salesPrice',
            value: form.salesPrice,
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
            name: 'salesEndDate',
            value: form.salesEndDate,
            label: 'Sales End Date',
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
            accept: 'images',
            multiple: true
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

                <Form className='p-3 shadow-lg product-card mb-2' onSubmit={handelOnSumbit} encType='multipart/form-data' >
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
                            onChange={item.name === 'images' ? handelOnImageSelect : handelOnChange} />)
                    }
                    <Button variant='primary' type='submit'>
                        Sumbit Product
                    </Button>
                </Form>
            </Container>
        </AdminLayout >

    )
}
