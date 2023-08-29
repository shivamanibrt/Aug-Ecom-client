import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='children'>
                {children}
            </div>
            <Footer />
        </div>
    )
}
