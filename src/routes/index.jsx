import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth"

import { AppRoutes } from "./app.routes"
import { AuthRoutes } from "./auth.routes"

export function Routes() {
   /* pegando a const 'user' de nosso contexto em useAuth.js */
   const { user } = useAuth() 

   return (
      <BrowserRouter>
         {user ?  <AppRoutes /> : <AuthRoutes />}
      </BrowserRouter>
   )
}