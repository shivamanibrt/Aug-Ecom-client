import { toast } from "react-toastify"
import { loginAdminUser } from "../../AxiosHelper/apiHelper"
import { setAdminUser } from "./userSlice"

export const loginUserAction = (data) => async (dispatch) => {
    const resultPromise = loginAdminUser(data);

    toast.promise(resultPromise, { pending: "Please wait..." })
    const { status, message, user } = await resultPromise;

    toast[status](message);

    status === 'success' && dispatch(setAdminUser(user))
}