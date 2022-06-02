import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./componentes/Header"
import Cart from "./componentes/CartWidget";
import ItemListContainer from "./componentes/ItemListContainer"
import Footer from "./componentes/Footer"
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import CartContext from "./context/CartContext";
import FinalizarCompra from "./componentes/FinalizarCompra";
import SearchContext from "./context/SearchContext";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import LoginContext from "./context/LoginContext";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



function App() {

    return <>
        <CartContext>
            <SearchContext>
                <LoginContext>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path="/" element={<ItemListContainer />} />
                            <Route path="/CartWidget" element={<Cart />} />
                            <Route path="/itemDetailContainer/:productId" element={<ItemDetailContainer />} />
                            <Route path="/category/:category" element={<ItemListContainer />} />
                            <Route path="/FinalizarCompra" element={<FinalizarCompra />} />
                            <Route path="/Login" element={<Login />} />
                            <Route path="/Register" element={<Register />} />
                        </Routes>
                        <ToastContainer />
                        <Footer />
                    </BrowserRouter>
                </LoginContext>
            </SearchContext>
        </CartContext>
    </>
}

export default App