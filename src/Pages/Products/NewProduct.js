import React from 'react'
import { AdminLayout } from '../../Layout/AdminLayout'
import { Button, Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'


export const NewProduct = () => {
    const navigate = useNavigate();

    const handelOnClick = () => {
        navigate('/products')
    }
    const itemField = {
        name: {

        }
    }
    // "name": "Sqckbook",
    //     "sku": "macs_14",
    //         "description": "Mac intel chip",
    //             "qty": 100,
    //                 "price": 2000,
    //                     "salesPrice": 0,
    //                         "salesStartDate": null,
    //                             "salesEndDate": null,
    //                                 "catId": "653a30a2e0dc67a70fe3dc28"

    return (
        <AdminLayout>
            <Container>
                <div className='text-start mt-2'>
                    <Button variant='primary' className="d-flex align-items-center" onClick={handelOnClick}><BiArrowBack />Go Back</Button>
                </div>
                <Form>
                    Hello
                </Form>
            </Container>
        </AdminLayout>

    )
}
