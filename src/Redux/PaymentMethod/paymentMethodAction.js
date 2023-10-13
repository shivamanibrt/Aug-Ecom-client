import { toast } from 'react-toastify';
import { deletePaymentMethod, fetchPaymentMethod, postPaymentMethod, updatePaymentMethod } from '../../AxiosHelper/apiHelper'
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
        const { status, message } = await postPaymentMethod(data)
        toast[status](message);
        status === 'success' && dispatch(getPaymentAction())
    } catch (error) {
        toast.error(error)
    }
}

export const deletePaymentAction = (_id) => async dispatch => {
    try {
        const { status, message } = await deletePaymentMethod(_id)
        toast[status](message);
        status === 'success' && dispatch(getPaymentAction())
    } catch (error) {
        toast.error(error)
    }
}

export const updatePaymentAction = (data) => async dispatch => {
    try {
        const { status, message } = await updatePaymentMethod(data);
        toast[status](message);
        status === 'success' && dispatch(getPaymentAction())
    } catch (error) {
        toast.error(error)
    }
}