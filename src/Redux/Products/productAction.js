import { toast } from "react-toastify";
import { fetchProducts, postProduct } from "../../AxiosHelper/apiHelper";
import { setProducts, setSelectedProduct } from "./productSlice";

export const getProductsAction = () => async dispatch => {
    const { status, products } = await fetchProducts();
    status === 'success' && dispatch(setProducts(products))
}

export const getSingleProductAciton = (_id) => async dispatch => {
    const { status, products } = await fetchProducts(_id)
    status === 'success' && dispatch(setSelectedProduct(products))
}

export const postProductsAction = (data) => async (dispatch) => {
    const responsePending = postProduct(data);
    toast.promise(responsePending, { pending: 'Please wait...' });

    const { status, message } = await responsePending;
    toast[status](message)
    status === 'success' && dispatch(getProductsAction())
}

