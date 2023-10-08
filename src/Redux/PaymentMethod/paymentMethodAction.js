import { fetchPaymentMethod } from '../../AxiosHelper/apiHelper'
import { setPaymentMethods } from './paymentMethodSlice';

export const getPaymentMethod = () => async dispatch => {
    try {
        const { status, result } = await fetchPaymentMethod();
        status === 'success' && dispatch(setPaymentMethods(result))
    } catch (error) {
        console.log(error)
    }
}