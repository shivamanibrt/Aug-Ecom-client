import { toast } from "react-toastify";
import { deleteProduct, fetchProducts, postProduct, updateProduct } from "../../AxiosHelper/apiHelper";
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

export const updateProductsAction = (data) => async (dispatch) => {
    const responsePending = updateProduct(data);
    toast.promise(responsePending, { pending: 'Please wait...' });

    const { status, message } = await responsePending;
    toast[status](message)
    status === 'success' && dispatch(getSingleProductAciton(data._id));
}

export const deleteProductAction = async (_id, data) => {
    try {
        const responsePendindg = deleteProduct(_id, data);
        toast.promise(responsePendindg, { pending: 'Please wait...' })
        const { status, message } = await responsePendindg;
        toast[status](message);
    } catch (error) {
        console.log(error)
    }
}

