import { fetchOrders } from "../../AxiosHelper/apiHelper"
import { setOrders, setSlectedOrder } from "./OrderSlice"

export const getOrders = () => async dispatch => {
    const { status, orders } = await fetchOrders()
    status === 'success' && dispatch(setOrders(orders))
}

export const getSingleOrder = (_id) => async dispatch => {
    const { status, orders } = await fetchOrders(_id)
    status === 'success' && dispatch(setSlectedOrder(orders))
}