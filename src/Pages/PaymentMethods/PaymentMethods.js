import React from 'react';
import { AdminLayout } from '../../Layout/AdminLayout';
import { Button, Container } from 'react-bootstrap';
import { PaymentMethodTable } from './PaymentMethodTable';
import { PaymentMethodForm } from './PaymentMethodForm';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../../Redux/Modal/ModalSlice';

export const PaymentMethods = () => {
    const dispatch = useDispatch();

    const handelOnClick = () => {
        dispatch(setShowModal(true))
    }

    return (
        <AdminLayout>
            <div className='p-4 text-secondary'>
                <h3>Payment Methods</h3>
            </div>

            <Container>
                <div className='d-flex justify-content-end p-2'>
                    <Button className="d-flex align-items-center" onClick={handelOnClick}>
                        <AiOutlinePlus /> Add Payment Method
                    </Button>
                </div>
                <PaymentMethodForm />
                <PaymentMethodTable />
            </Container>
        </AdminLayout>
    );
};
