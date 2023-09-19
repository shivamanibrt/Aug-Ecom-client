import { deleteCataegory, fetchCategory, postCategory } from "../../AxiosHelper/apiHelper"
import { setCatageory } from "./CatageorySlice"
import { toast } from 'react-toastify'

export const getAllCatagories = () => async (dispatch) => {
    const { status, catagories } = await fetchCategory()

    status === 'success' && dispatch(setCatageory(catagories))
};
export const postCategoriesAction = (data) => async (dispatch) => {
    const promisePending = postCategory(data);
    toast.promise(promisePending, { pending: 'Please wait...' })

    const { status, message } = await fetchCategory();
    toast[status](message)
    status === 'success' && dispatch(getAllCatagories());
};
export const deleteCategoriesAction = (data) => async (dispatch) => {
    const { status } = await deleteCataegory();
    status === 'success' && dispatch(getAllCatagories(data))
}

