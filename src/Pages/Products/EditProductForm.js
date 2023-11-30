import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
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
    salesPrice: 0,
    salesStartDate: null,
    salesEndDate: null,
    description: '',
}

export const EditProductForm = () => {
    const [form, setForm] = useState(initialState);
    const [images, setImages] = useState([])

    const dispatch = useDispatch();

    const { catageory } = useSelector((state) => state.catageory);
    const { selectedProduct } = useSelector(state => state.products)

    useEffect(() => {
        !catageory.length && dispatch(getAllCatagories());
        setForm(selectedProduct)
        console.log(selectedProduct)
    }, [dispatch, catageory, selectedProduct]);

    const handelOnChange = (e) => {
        let { checked, name, value } = e.target;
        if (name === 'status') {
            value = checked ? 'active' : 'inactive';
        }
        setForm({ ...form, [name]: value });
    }

    const handelOnImageSelect = e => {
        const { files } = e.target;
        setImages(files);
    }

    const handelOnSumbit = (e) => {
        e.preventDefault()

        const formData = new FormData();
        for (const key in form) {
            formData.append(key, form[key])
        }
        //append images 
        images.length && [...images].map((img) => formData.append('images', img));
        dispatch(postProductsAction(formData))

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
            min: 1,
            required: true
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
            placeholder: 'YYYY-MM-DD',
        },
        {
            name: 'salesEndDate',
            value: form.salesEndDate,
            label: 'Sales End Date',
            type: 'date',
            placeholder: 'YYYY-MM-DD',
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
            accept: 'image/*',
            multiple: true
        }
    ];

    return (


        <Form className='p-3 shadow-lg product-card mb-2' onSubmit={handelOnSumbit} enctype='multipart/form-data' >
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
                <option value="">Select Category</option>
                {catageory.length > 0 &&
                    catageory.map((item) => (
                        item.parentId &&
                        (
                            <option value={item._id}>{item.name}</option>)
                    ))
                }
            </Form.Select>
            <Form.Group>

            </Form.Group>
            {inputField.map((item, i) =>
                <CustomInput {...item} key={i}
                    onChange={item.name === 'images' ? handelOnImageSelect : handelOnChange} />)
            }
            <Button variant='primary' type='submit'>
                Sumbit Product
            </Button>
        </Form>

    )
}
