import { useAux } from "../context/LoginContext"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAux();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login (user.email, user.password);
      navigate("/");
    }
    catch (error) {
      console.log(error);
      if (error.code === "auth/wrong-password") {
        toast.error('Contraseña incorrecta');
      }
      if (error.code === "auth/user-not-found") {
        toast.error('El usuario no se encuentra registrado')
      }

    }
  }
  return (

    <div className='checkOut'>
      <h1>Ingrese su usuario</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder='Email' onChange={handleChange} />
        <input type="password" name="password" placeholder='Password' onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>

    </div>

  )
}

export default Login