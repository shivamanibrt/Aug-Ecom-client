import { toast } from "react-toastify"
import { getAdminUSer, getNewAccessJWT, loginAdminUser, updateAdminPassword, updateAdminUser } from "../../AxiosHelper/apiHelper"
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

export const adminLogout = () => dispatch => {
    dispatch(setAdminUser({}))
    sessionStorage.removeItem('accessJWT')
    localStorage.removeItem('refreshJWT')
}

export const getAdminUserAction = (token) => async (dispatch) => {
    const { status, user } = await getAdminUSer(token)
    status === 'success' && dispatch(setAdminUser(user))
}

export const autoLogin = () => async (dispatch) => {
    const accessJWT = sessionStorage.getItem('accessJWT');
    const refreshJWT = localStorage.getItem('refreshJWT');
    if (accessJWT) {
        //if accessJWT exist, fetch user and mount user in our redux store
        dispatch(getAdminUserAction())
    } else if (refreshJWT) {
        // if refreshJWT exist only,request fetch new accessJWT and fetch user using the newly fetch accessJWT 
        const token = await getNewAccessJWT()
        token ? dispatch(getAdminUserAction(token)) : dispatch(adminLogout())
    } else {
        dispatch(adminLogout())
    }
}

export const updateAdminProfileAction = (data) => async dispatch => {
    try {
        const promisePending = updateAdminUser(data);
        toast.promise(promisePending, { pending: 'Please wait' });
        const { status, message } = await promisePending;
        toast[status](message);
        status === 'success' && dispatch(getAdminUserAction())
    } catch (error) {
        toast.error(error.message)
    }
}
export const updateAdminPasswordAction = async (data) => {
    try {
        const promisePending = updateAdminPassword(data);
        toast.promise(promisePending, { pending: 'Please wait ...' })
        const { status, message } = await promisePending;
        toast[status](message)
    } catch (error) {
        toast.error(error.message)
    }
}
