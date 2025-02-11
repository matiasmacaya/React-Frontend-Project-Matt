import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Componentes/Register/Register";
import Login from '../Componentes/Login/Login'

const Router = ( {children} ) => {

    const Home = () => <h1>Welcome</h1>;
    const Vista1 = () => <h1>Galeria de Imagenes de Mi Emprendimiento</h1>;

    return (
        <>
        <BrowserRouter>

            { children }

            <Routes>

                <Route path="/"         element={<Home />} />
                <Route path="/gallery"  element={<Vista1 />} />
                <Route path="/login"    element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

        </BrowserRouter>
        </>
    );
};

export default Router;