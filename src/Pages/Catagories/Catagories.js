import React from 'react'
import { AdminLayout } from '../../Layout/AdminLayout'
import { CatagegoryTable } from './CatagegoryTable'
import { CatgeoryForm } from './CatgeoryForm'
import Container from 'react-bootstrap/Container'

export const Catagories = () => {
    return (
        <AdminLayout>
            <Container >
                <div className='p-4 bold'>
                    <h3>Catagories</h3>
                </div>
                <Container>
                    <CatgeoryForm />
                    <CatagegoryTable />
                </Container>
            </Container>
        </AdminLayout>
    )
}
