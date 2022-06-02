import { createContext, useState } from "react"
export const search = createContext()
const { Provider } = search


const SearchContext = ({children}) => {

    const [buscars, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);   
   }

   const valor = {
     handleSearch : handleSearch,
     buscars : buscars
}

return (
    <Provider value={valor}>
        {children}
    </Provider>
)
}

export default SearchContext