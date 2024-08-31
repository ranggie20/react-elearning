import { createContext, useState } from "react";

export const AuthContext = createContext({
  auth: {},
  setAuth: () => {},
  destroyAuth: () => {}
})

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})

  const destroyAuth = () => {
    setAuth({})
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, destroyAuth }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider