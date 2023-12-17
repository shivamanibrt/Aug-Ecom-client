import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { OrderEditFor } from './OrderEditFor'

export const OrderDetails = () => {
    return (
        <Container>
            <Link to='/orders' className='text-decoration-none text-secondary'>
                &lt; Back
            </Link>
            <h1 className='py-3'>Order Details</h1>
            <hr />
            <OrderEditFor />
        </Container>
    )
}
