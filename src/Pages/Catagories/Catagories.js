import React from 'react'
import { AdminLayout } from '../../Layout/AdminLayout'
import { CatagegoryTable } from './CatagegoryTable'
import { CatgeoryForm } from './CatgeoryForm'
import Container from 'react-bootstrap/Container'

export const Catagories = () => {
    return (
        <AdminLayout>
            <div className='p-4 text-secondary'>
                <h3>Catagories</h3>
            </div>
            <Container>
                <CatgeoryForm />
                <CatagegoryTable />
            </Container>
        </AdminLayout>
    )
}
