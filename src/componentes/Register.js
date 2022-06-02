import { useAux } from "../context/LoginContext"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

const Register = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAux();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    await  signup(user.email, user.password);
      navigate("/");
    }
    catch (error) {
      console.log(error);

      if (error.code === "auth/invalid-email") {
      toast.error('Correo invalido');
    }
    if (error.code === "auth/email-already-in-use") {
      toast.error('El correo ya esta en uso')
  }

  if (error.code === "auth/weak-password") {
    toast.error('La contraseña debe tener al menos 6 caracteres')
  }
    }
}
  return (
  
    <div className='checkOut'>
      <h1>Ingrese su nuevo usuario</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder='Email' onChange={handleChange} />
        <input type="password" name="password" placeholder='Password' onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>

    </div>
   
  )
}

export default Register