import { Outlet, Navigate, Route } from "react-router-dom";

function LoginRoute ({auth}){

    return (
       auth ? <Navigate to="/admin"/>: <Outlet/>
       
    )
} 

export default LoginRoute