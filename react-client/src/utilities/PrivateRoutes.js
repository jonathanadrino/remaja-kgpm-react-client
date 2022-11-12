import { Outlet, Navigate, Route } from "react-router-dom";

function PrivateRoutes ({auth}){

    return (
       auth ? <Outlet/>: <Navigate to="/login"/>
       
    )
} 

export default PrivateRoutes