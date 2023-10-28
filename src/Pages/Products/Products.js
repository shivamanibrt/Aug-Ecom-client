import React from 'react'
import { AdminLayout } from '../../Layout/AdminLayout'
import { AiOutlinePlus } from 'react-icons/ai'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ProductTable } from './ProductTable'

export const Products = () => {
    const navigate = useNavigate()

    const handelOnClick = () => {
        navigate('/newProduct')
    }

    return (
        <AdminLayout>
            <div className='p-4 text-secondary'>
                <h3>Products</h3>
            </div>
            <div className='text-end p-1'>
                <Button variant="primary" onClick={handelOnClick}> <AiOutlinePlus /> Add new Product
                </Button>
            </div>
            <hr />
            <ProductTable />
        </AdminLayout>
    )
}
