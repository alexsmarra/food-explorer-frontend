import { createContext, useContext, useState } from "react"

import { api } from "../services/api.js"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
   const [data, setData] = useState({})

   /* params entre chaves, assim, sempre que utilizarmos a nossa function 'signIn' não precisaremos
   chamar os params necessariamente nessa ordem */
   async function signIn({ email, password }) {
      try {
         /* Irá pegar o email e senha digitado pelo usuário nos inputs da page SignIn e enviará
         para o nosso backend (para o nosso sessionController.js analisar) */
         const response = await api.post("/sessions", { email, password })

         const { user, token } = response.data
         /* Inserindo um token do tipo Bearer, de autorização, no cabeçalho por padrão em todas as
         requisições que o usuário for fazer a partir de agora */
         api.defaults.headers.common['Authorization'] = `Bearer ${token}`
         setData({ user, token })

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
      /* compartilhando signIn e data.user (e o que mais quisermos) em nosso contexto para que 
         fique disponível em todo o nosso app */
      <AuthContext.Provider value={{ signIn, user: data.user }}>
         {children}
      </AuthContext.Provider>
   )
}

function useAuth() {
   const context = useContext(AuthContext)

   return context
}

export { AuthProvider, useAuth }

