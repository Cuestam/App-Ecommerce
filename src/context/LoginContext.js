import { createContext, useContext } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/Firebase';

export const context = createContext()

export const useAux = () => {
  const auxContext = useContext(context)
  return auxContext
}

const LoginContext = ({ children }) => {
  const  signup = (email, password) => 
createUserWithEmailAndPassword(auth, email, password);

const login = (email, password) =>
 signInWithEmailAndPassword(auth, email, password);

  return (
    <context.Provider value={{ signup, login }}> {children}</context.Provider>
  )
}

export default LoginContext