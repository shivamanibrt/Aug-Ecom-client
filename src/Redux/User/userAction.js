import { toast } from "react-toastify"
import { loginAdminUser } from "../../AxiosHelper/apiHelper"
import { setAdminUser } from "./userSlice"

export const loginUserAction = (data) => async (dispatch) => {
    const resultPromise = loginAdminUser(data);

    toast.promise(resultPromise, { pending: "Please wait..." })
    const { status, message, user, refreshJWT, accessJWT } = await resultPromise;

    toast[status](message);

    if (status === 'success') {
        sessionStorage.setItem('accessJWT', accessJWT)
        localStorage.setItem('refreshJWT', refreshJWT)
        dispatch(setAdminUser(user))
    }
}