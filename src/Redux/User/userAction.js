import { toast } from "react-toastify"
import { loginAdminUser } from "../../AxiosHelper/apiHelper"
import { setAdminUser } from "./userSlice"
// import { getAdminUSer } from "../../../../api/src/Modles/adminUser/AdminUserModal.js";

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

export const getAdminUserAction = () => async dispatch => {
    // const { status, message, user } = await getAdminUSer()

}

export const autoLogin = () => async (dispatch) => {
    const accessJWT = sessionStorage.getItem('accessJWT');
    const refreshJWT = localStorage.getItem('refreshJWT');

    if (accessJWT) {
        //if accessJWT exist, fetch user and mount user in our redux store

    } else if (refreshJWT) {

        // if refreshJWT exist only,request fetch new accessJWT and fetch user using the newly fetch accessJWT 
    } else {
        dispatch(adminLogout())
    }

    //else
}