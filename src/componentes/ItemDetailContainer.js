import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"
import {db} from "../services/Firebase"
import { doc, getDoc } from 'firebase/firestore'
import { toast } from "react-toastify"

const ItemDetailContainer = () => {

  const [item, setProductos] = useState({})
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()

  useEffect(() => {
     
  const docRef = doc(db, 'Productos', productId)
    getDoc(docRef).then((res) => {

      const productos =  { productId: res.id, ...res.data() }
        setProductos(productos)
   
      })


    .catch((error) => {
      toast.error('Error al cargar los productos')
    }).finally(() => {
      setLoading(false)
    })

  },[productId])

  
   
  return (

    <section className='main'>
      {loading ? <div className='loadingDetail'>  <img  src="/images/loading-11.gif"/> </div>:
        <ItemDetail item={item} />}

</section>
  )

}


export default ItemDetailContainer