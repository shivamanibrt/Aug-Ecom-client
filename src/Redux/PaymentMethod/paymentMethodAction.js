import { toast } from 'react-toastify';
import { fetchPaymentMethod, postPaymentMethod } from '../../AxiosHelper/apiHelper'
import { setPaymentMethods } from './paymentMethodSlice';

export const getPaymentAction = () => async dispatch => {
    try {
        const { status, result } = await fetchPaymentMethod();
        status === 'success' && dispatch(setPaymentMethods(result))
    } catch (error) {
        toast.error(error)
    }
}

export const postPaymentAction = (data) => async (dispatch) => {
    try {
        const promisePending = postPaymentMethod(data)
        toast.promise(promisePending, { pending: 'Please wait...' })
        const { status, message } = await promisePending();
        toast[status](message);
        status === 'success' && dispatch(getPaymentAction())
    } catch (error) {
        toast.error(error)
    }
}

export const deletePaymentAction = (data) => async dispatch => {
    try {
        // const deletePaymentMethod
    } catch (error) {
        toast.error(error)
    }
}