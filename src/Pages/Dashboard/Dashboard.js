import React from 'react'
import { Container } from 'react-bootstrap'
import { Products } from '../Products/Products'

export const Dashboard = ({ children }) => {
    return (
        <Container>
            <div>
                <ul>
                    <li>products</li>
                </ul>
            </div>
            <main>
                {children}
            </main>

        </Container>
    )
}
