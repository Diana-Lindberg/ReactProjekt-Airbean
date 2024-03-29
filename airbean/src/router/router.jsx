import { createBrowserRouter } from "react-router-dom";

import Splaschscreen from "../pages/Splashscreen";
import Menu from "../pages/Menu";
import About from "../pages/About";
import OrderStatus from "../pages/OrderStatus";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Splaschscreen />
    },
    {
        path: '/menu',
        element: <Menu /> 
    },
    {
        path: '/about',
        element: <About /> 
    },
    {
        path: '/orderstatus',
        element: <OrderStatus /> 
    }
    // {
    //     path: '/produkt/:name', //Dynamisk url där :name ersätts med något 
    //     element: <ProductInfo />
    // }
]);

export default router;