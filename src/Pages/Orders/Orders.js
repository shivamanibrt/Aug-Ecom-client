import React from 'react'
import { AdminLayout } from '../../Layout/AdminLayout'
import { OrdersTable } from './OrdersTable'

export const Orders = () => {

    return (
        <AdminLayout>
            <div className='p-4 text-secondary'>
                <h3>Orders</h3>
            </div>
            <OrdersTable />
        </AdminLayout>
    )
}
