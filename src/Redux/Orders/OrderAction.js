import { fetchOrders } from "../../AxiosHelper/apiHelper"
import { setOrders } from "./OrderSlice"

export const getOrders = () => async dispatch => {
    const { status, orders } = await fetchOrders()
    status === 'success' && dispatch(setOrders(orders))
}