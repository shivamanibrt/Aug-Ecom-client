import { deleteCataegory, fetchCategory, postCategory, updateCategory } from "../../AxiosHelper/apiHelper"
import { setCatageory } from "./CatageorySlice"
import { toast } from 'react-toastify'

export const getAllCatagories = () => async (dispatch) => {
    const { status, catagories } = await fetchCategory()
    status === 'success' && dispatch(setCatageory(catagories))
};

export const postCategoriesAction = (data) => async (dispatch) => {
    const promisePending = postCategory(data);
    toast.promise(promisePending, { pending: 'Please wait...' })
    const { status, message } = await promisePending;
    toast[status](message)
    status === 'success' && dispatch(getAllCatagories());
};

export const updateCategoriesAction = (data) => async (dispatch) => {
    const promisePending = updateCategory(data);
    toast.promise(promisePending, { pending: 'Please wait...' })

    const { status, message } = await promisePending;
    toast[status](message)
    status === 'success' && dispatch(getAllCatagories());
};


export const deleteCategoriesAction = (data) => async (dispatch) => {
    const { status, message } = await deleteCataegory({ _id: data });
    toast[status](message)
    status === 'success' && dispatch(getAllCatagories())
}

