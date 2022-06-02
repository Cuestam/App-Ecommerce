import { useState , useEffect } from 'react'
import React from 'react'
import { useContext, } from "react"
import { contexto } from "../context/CartContext"
import { db } from "../services/Firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { toast } from "react-toastify"

const FinalizarCompra = () => {

    const resultado = useContext(contexto)
    const carrito = resultado.carrito

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [norden, setNorden] = useState(0);
    const [enviado, setEnviado] = useState(false);


    const handleNombre = (e) => {
        setNombre(e.target.value);
    }
    const handleTelefono = (e) => {
        setTelefono(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleNorden = (e) => {
        setNorden(Math.floor(Math.random() * 100000));
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if (nombre === '' || telefono === '' || email === '') { 
            toast.error('Complete todos los campos', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });}

        else {

        const orden = {
            buyer: {
                nombre: nombre,
                telefono: telefono,
                email: email,
                norden: norden,
            },
            items: carrito.map(item => ({ id: item.id, nombre: item.nombre, precio: item.precio })),
            date: serverTimestamp(),
            total: carrito.reduce((acc, ele) => {
                acc = acc + parseFloat(ele.precio * ele.count)
                return acc
            }, 0)
        }
        const ordenesCollection = collection(db, "ordenes")
        const pedido = addDoc(ordenesCollection, orden)

        pedido
            .then(res => {
                console.log(res.id)
            })

            setEnviado(true)

            setEmail('')
            setNombre('')
            setTelefono('')

            handleNorden()
    }
    }
    return (
        <>
        {enviado ? <div className='compraFinal'> 
       <div className='titulo'> <h1>Compra realizada con exito </h1><img src="/images/exito.png" alt="imagen de exito" /></div>
        <p>Nos pondremos en contacto a la brevedad</p>
        <p className='p2'>Su número de orden es: {norden}</p>
        </div>:

        <div className='checkOut'>
            <h1>Completa tus datos</h1>
            <form onSubmit={handleSubmit}>
                <label >
                    <input type="text" name="name" onChange={handleNombre} value={nombre} placeholder='Nombre completo'/>
                </label>
                <label >
                    <input type="text" name="last name" onChange={handleTelefono} value={telefono}
                        placeholder='Telefono' />
                </label>
                <label >
                    <input type="text" name="email" onChange={handleEmail} value={email} placeholder='Email'/>
                </label>
                <button><p className='textBtn'>Enviar</p></button>
            </form>
        </div>}
        </>
    )
}

export default FinalizarCompra



