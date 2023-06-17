import { createContext, useContext, useState } from "react"

import { api } from "../services/api.js"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
   // const [data, setData] = useState({})

   /* params entre chaves, assim, sempre que utilizarmos a nossa function 'signIn' não precisaremos
   chamar os params necessariamente nessa ordem */
   async function signIn({ email, password }) {
      try {
         /* Irá pegar o email e senha digitado pelo usuário nos inputs da page SignIn e enviará
         para o nosso backend (para o nosso sessionController.js analisar) */
         const response = await api.post("/sessions", { email, password })
         /* Dentro da resposta de nosso sessionController temos várias propriedades, e dentro de 
         'data' está nosso 'token' e 'user' */
         const { token, user } = response.data
         console.log(token, user)

      } catch(error) {
         if(error.response) {
            /* chama a msg do AppError de nosso backend */
            alert(error.response.data.message)
         } else {
            alert("Não foi possível entrar!")
         }
      }
   }

   return (
      <AuthContext.Provider value={{ signIn }}>
         {children}
      </AuthContext.Provider>
   )
}

function useAuth() {
   const context = useContext(AuthContext)

   return context
}

export { AuthProvider, useAuth }

