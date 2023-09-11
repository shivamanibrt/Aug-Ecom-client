import React from 'react'
import { AdminLayout } from '../../Layout/AdminLayout'

export const Dashboard = () => {
    return (
        <AdminLayout>
            <div className='p-4 text-secondary'>
                <h3 className='dashboard_heading' >Dashboard</h3>
            </div>
        </AdminLayout>
    )
}
