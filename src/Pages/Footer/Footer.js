import React from 'react'

export const Footer = () => {
    return (
        <div className="text-center p-4 text-white" style={{
            backgroundColor: '#20262e'
        }}>
            <p>
                &copy; {new Date().getFullYear()} Your E-Commerce Store | By {" "}
                <span>
                    <a href='https://shivamani-portfolio.vercel.app/' className='text-warning'>Shivamani</a>
                </span>
            </p>
        </div >
    )
}
