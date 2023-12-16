import React from 'react'
import { CustomModal } from '../../Component/ShowModal/CustomModal'
import { useSelector } from 'react-redux'

export const OrderDetails = () => {
    const { orderModal } = useSelector(state => state.orders)
    const { selectedOder } = useSelector(state => state.orders)

    return (
        <CustomModal heading='Order details'>
            <div>
                <p>status: {selectedOder}</p>
            </div>
        </CustomModal>
    )
}
