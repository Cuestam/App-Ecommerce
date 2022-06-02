import Items from './Items'

const ItemList = ({productos}) => {

  return (

    <div className="containerProduct">
        {productos.map((item) => {
          return (
            <Items  key={item.id} item={item}/>
             )
        })}
    </div>
  )

}

export default ItemList 