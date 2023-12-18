import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSlectedOrder } from '../../Redux/Orders/OrderSlice'
import { getSingleOrder } from '../../Redux/Orders/OrderAction'

export const OrderEditFor = () => {
    const { _id } = useParams()
    const dispatch = useDispatch()
    const { orders, selectedOrder } = useSelector((state) => state.orders);

    useEffect(() => {
        const select = orders.find((item) => item._id === _id);

        if (select) {
            dispatch(setSlectedOrder(select));
        } else if (orders.length === 0) {
            dispatch(getSingleOrder(_id));
        }
    }, [dispatch, orders, _id]);



    return (
        <div>
            <div className="fw bold py-2 d-flex justify-content-between">
                <div>Status: {selectedOrder?.status}</div>

            </div>
        </div>
    )
}
