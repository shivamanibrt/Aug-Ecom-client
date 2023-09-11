import React from 'react'
import { PrivatePages } from '../PrivatePage/PrivatePages'
import { Link } from 'react-router-dom'
import { AiFillDashboard, AiOutlineUnorderedList } from 'react-icons/ai'
import { TbDeviceAirpodsCase } from 'react-icons/tb'
import { BiMoney } from 'react-icons/bi'
import { FaUsers } from 'react-icons/fa'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdRateReview } from 'react-icons/md'
import { CiSettings } from 'react-icons/ci'

export const AdminLayout = ({ children }) => {
    return (
        <PrivatePages>
            <div className='user-layout'>
                <div className='left'>
                    <h3 className='text-center text-secondary mt-4'>Hi !</h3>
                    <ul>
                        <li className='nav-item list-unstyled p-2'>
                            <Link to='/dashboard' className='nav-link'>
                                <AiFillDashboard size={24} />Dashboard
                            </Link>
                        </li>
                        <li className='nav-item list-unstyled p-2'>
                            <Link to='/catagories' className='nav-link'>
                                <AiOutlineUnorderedList size={24} />Catagories
                            </Link>
                        </li>
                        <li className='nav-item list-unstyled p-2'>
                            <Link to='/products' className='nav-link'>
                                <TbDeviceAirpodsCase size={24} /> Products
                            </Link>
                        </li>
                        <li className='nav-item list-unstyled p-2'>
                            <Link to='/paymentMethods' className='nav-link'>
                                <BiMoney size={24} /> Payment Methods
                            </Link>
                        </li>
                        <li className='nav-item list-unstyled p-2'>
                            <Link to='/users' className='nav-link'>
                                <FaUsers size={24} />Users
                            </Link>
                        </li>
                        <li className='nav-item list-unstyled p-2'>
                            <Link to='/orders' className='nav-link'>
                                <TbTruckDelivery size={24} />Orders
                            </Link>
                        </li>
                        <li className='nav-item list-unstyled p-2'>
                            <Link to='/reviews' className='nav-link'>
                                <MdRateReview size={24} />Reviews
                            </Link>
                        </li>
                        <li className='nav-item list-unstyled p-2'>
                            <Link to='/settings' className='nav-link'>
                                <CiSettings size={24} />Settings
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='right'>
                    <div>{children}</div>
                </div>
            </div>
        </PrivatePages>
    )
}
