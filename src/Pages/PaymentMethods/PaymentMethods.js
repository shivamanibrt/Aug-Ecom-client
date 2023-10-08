import React from 'react';
import { AdminLayout } from '../../Layout/AdminLayout';
import { Container } from 'react-bootstrap';
import { PaymentMethodTable } from './PaymentMethodTable';
import { PaymentMethodForm } from './PaymentMethodForm';

export const PaymentMethods = () => {
    return (
        <AdminLayout>
            <div className='p-4 text-secondary'>
                <h3>Payment Methods</h3>
            </div>
            <Container>
                <PaymentMethodForm />
                <PaymentMethodTable />
            </Container>
        </AdminLayout>
    );
};
