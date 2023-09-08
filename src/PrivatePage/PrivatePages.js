import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivatePages = ({ children }) => {

    const { adminUser } = useSelector((state) => state.admin)

    return adminUser?._id ? children : <Navigate to='/' replace />
}
