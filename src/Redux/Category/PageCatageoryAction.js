import { fetchCategory } from "../../AxiosHelper/apiHelper"
import { setCatageory } from "./CatageorySlice"

export const getAllCatagories = () => async (dispatch) => {
    const { status, catagories } = await fetchCategory()

    status === 'success' && dispatch(setCatageory(catagories))
}
