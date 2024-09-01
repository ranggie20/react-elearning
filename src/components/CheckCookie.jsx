import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthProvider"
import Loading from "./Loading"
import { Navigate, Outlet } from "react-router-dom"
import axios from "../api/axios"

const CheckCookie = ({ roles, override }) => {
  const { auth, setAuth } = useContext(AuthContext)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    axios.get("/auth/get-user-info", { withCredentials: true })
      .then((res) => {
        setAuth({
          userID: res.data.data.user_id,
          role: res.data.data.role
        })
      })
      .catch(() => {
        setAuth({})
      })
      .finally(() => {
        setIsChecking(false)
      })
  }, [])

  return isChecking && !override ? (
    <Loading />
  ) : override || auth.userID ? (
    override || roles.includes(auth.role)  ? (
      <Outlet />
    ) : (
      <Navigate to="/404" replace />
    )
  ) : (
    <Navigate to="/login" replace />
  )
}

export default CheckCookie