import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSlectedOrder } from '../../Redux/Orders/OrderSlice'

export const OrderEditFor = () => {
    const { _id } = useParams()
    const dispatch = useDispatch()
    const { orders, slectedOrder } = useSelector((state) => state.orders)
    useEffect(() => {
        if (orders.length) {
            const select = orders.filter((item) => item._id === _id)
            dispatch(setSlectedOrder(select))
        }
    }, [dispatch])

    return (
        <div>OrderEditFor {_id}</div>
    )
}
