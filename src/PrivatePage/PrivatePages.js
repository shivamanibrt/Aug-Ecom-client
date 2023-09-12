import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

export const PrivatePages = ({ children }) => {
    const location = useLocation();

    const { adminUser } = useSelector((state) => state.admin)
    // const adminUser = {
    //     _id: 11
    // }
    return adminUser?._id ? children : <Navigate to='/login' replace state={{ from: location }} />
}
