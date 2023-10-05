import axios from 'axios'

const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEp = rootUrl + '/admin-user'
const catagoryEP = rootUrl + '/catagory'

const apiProcessor = async ({ method, url, data, isPrivate, token }) => {
    try {
        let headers = isPrivate ? { Authorization: token || sessionStorage.getItem('accessJWT') } : null;
        const response = await axios({
            method,
            url,
            data,
            headers,
        })

        return response.data
    } catch (error) {
        let message = error.message;
        if (error.response && error.response.status === 401) {
            sessionStorage.removeItem('accessJWT')
            localStorage.removeItem('refreshJWT')
        }
        if (error.response && error.response.data) {
            message = error.response.data.message;
        }

        if (message === 'jwt expired') {
            // call the api to get new accessJWT and store in the session and recall the api processor
            const accessJWT = await getNewAccessJWT()
            if (accessJWT) {
                return apiProcessor({ method, url, data, isPrivate, token })
            }
        }
        if (error.resonse)
            return {
                status: 'error',
                message
            }
    }
}

export const emailVerifyAdminUser = (data) => {
    const option = {
        method: 'get',
        url: adminUserEp,
        isPrivate: true
    }
    return apiProcessor(option);
}
export const postUser = (data) => {
    const option = {
        method: 'post',
        url: adminUserEp,
        data
    }
    return apiProcessor(option);
}

export const verifyAdminEmail = (data) => {
    const option = {
        method: 'patch',
        url: adminUserEp + '/verify-email',
        data,
    }
    return apiProcessor(option);
}

export const loginAdminUser = (data) => {
    const option = {
        method: 'post',
        url: adminUserEp + '/login',
        data,
    }
    return apiProcessor(option);
}

export const getAdminUSer = (token) => {
    const option = {
        method: 'get',
        url: adminUserEp,
        isPrivate: true,
        token
    }
    return apiProcessor(option);
}

//fetch new accessJWT
export const getNewAccessJWT = async () => {
    const option = {
        method: 'get',
        url: adminUserEp + "/accessjwt",
        isPrivate: true,
        token: localStorage.getItem('refreshJWT')
    };
    const { status, accessJWT } = await apiProcessor(option);
    status === 'success' && sessionStorage.setItems('accessJWT', accessJWT)
    return accessJWT
}

export const fetchCategory = (_id) => {
    const option = {
        method: 'get',
        url: _id ? catagoryEP + '/' + _id : catagoryEP,
        isPrivate: true
    }
    return apiProcessor(option);
}

export const deleteCataegory = (data) => {
    const option = {
        method: 'delete',
        url: catagoryEP,
        data,
        isPrivate: true
    }
    return apiProcessor(option);
}

export const postCategory = (data) => {
    const option = {
        method: 'post',
        url: catagoryEP,
        data,
        isPrivate: true
    }
    return apiProcessor(option);
}

export const updateCategory = (data) => {
    const option = {
        method: 'put',
        url: catagoryEP,
        data,
        isPrivate: true
    }
    return apiProcessor(option);
}