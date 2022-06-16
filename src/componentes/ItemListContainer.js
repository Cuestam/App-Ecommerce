import ItemList from "./ItemList"
import { useState, useEffect } from 'react'
import { db } from "../services/Firebase"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { useContext, } from "react"
import { search } from "../context/SearchContext"
import Carrousel from "../carousel/Carrousel"


const ItemListContainer = ({ item }) => {

  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const { category } = useParams();
  const buscar = useContext(search)
  const target = buscar.buscars
  const [filtrado, setFilter] = useState(false)

  useEffect(() => {

    setLoading(true)

    const refCollection = category ? query(collection(db, 'Productos'), where('tipo', '==', category)) :
      collection(db, 'Productos')

    const document = getDocs(refCollection)
    const aux = [];

    document.then((res) => {
      res.docs.forEach(doc => {
        aux.push({ id: doc.id, ...doc.data() }) 
      })

      if (target !== undefined) {

        let newList = [];
        newList = aux.filter(item => item.tipo.toLowerCase().includes(target.toLowerCase()) || item.nombre.toLowerCase().includes(target.toLowerCase()));
        newList.length === 0 ? setFilter(true) : setFilter(false)
        setProductos(newList)
      }

      else {
        setProductos(aux)
      }

    }).catch((error) => {
      toast.error('Error al cargar los productos')
    }).finally(() => {
      setLoading(false)
    })

  }, [target, category])


  return (
    <>
      {loading ? <div className='loading'><img src="/images/loading-11.gif"/></div> :

        <section >
          {filtrado ? <p className="noEncontrado">Producto no encontrado</p> :
          <div>
         { category ? '' : <Carrousel />}
          
            <div className="titulo">
              
              <h2>Nuestros productos</h2>
            </div>
            </div>}
          <ItemList productos={productos} />
    
        </section>
      }
    </>)

}


export default ItemListContainer