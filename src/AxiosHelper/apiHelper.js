import axios from 'axios'

const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEp = rootUrl + '/admin-user'
const catagoryEP = rootUrl + '/catagory'

const apiProcessor = async ({ method, url, data, isPrivate }) => {
    try {
        let headers = isPrivate ? { Authorization: sessionStorage.getItem('accessJWT') } : null;

        const response = await axios({
            method,
            url,
            data,
            headers,
        })

        return response.data
    } catch (error) {
        return {
            status: 'error',
            message: error.message
        }
    }
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
        data
    }
    return apiProcessor(option);
}