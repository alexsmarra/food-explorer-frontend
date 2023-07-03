import { createContext, useContext, useState, useEffect } from "react"

import { api } from "../services/api.js"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
   /* Quando demos um reload na página, esse estado será recarregado e ele reiniciará como um
   estado vazio, por isso precisaremos armazenar os dados desse useState no localStorage, no
   navegador, nele, mesmo com reload, permanecerá gravado.  */
   const [data, setData] = useState({})

   /* params entre chaves, assim, sempre que utilizarmos a nossa function 'signIn' não precisaremos
   chamar os params necessariamente nessa ordem */
   async function signIn({ email, password }) {
      try {
         /* Irá pegar o email e senha digitado pelo usuário nos inputs da page SignIn e enviará
         para o nosso backend (para o nosso sessionController.js analisar) */
         const response = await api.post("/sessions", { email, password })

         // pegando user e token de nosso backend
         const { user, token } = response.data

         /* Para armazenar informações no navegador do usuário. 
         Precisaremos armazenar os dados do useState acima no localStorage (no navegador), nele, mesmo com reload, permanecerá gravado. Dessa forma ao darmos um reload, a página não retornará para o auth.routes.js (em nosso caso). 
         To store in localStorage, it needs to be in text format */
         localStorage.setItem("@rocketfood:user", JSON.stringify(user))
         // não precisa converter para texto, já que o token já é um texto
         localStorage.setItem("@rocketfood:token", token)

         /* Inserindo um token do tipo Bearer, de autorização, no cabeçalho por padrão em todas as
         requisições que o usuário for fazer a partir de agora */
         api.defaults.headers.common['Authorization'] = `Bearer ${token}`

         // armazenando informações
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

   async function signOut() {
      localStorage.removeItem("@rocketfood:user")
      localStorage.removeItem("@rocketfood:token")

      setData({})
   }

   /* Usaremos o useEffect pois ao atualizar a página, os useState fica vazio */
   /* useEffect para buscar as informações do localStorage. Always leave closest to the return. 
   When we leave the [] empty, the app will be loader only once after rendering our component 
   (o app será carregado apenas uma vez após nosso componente ser renderizado, dessa forma, 
   quando o usuário fizer o login e for direcionando para a page Home, se atualizarmos a tela, 
   manterá na tela Home. Sem o useEffect, caso atualizássemos a tela após o usuário fazer o login, 
   voltaria para a tela de login, pois o useState é resetado. Se colocarmos uma variável dentro 
   dos [], isso quer dizer que, toda vez que essa variável mudar, o useEffect será executado. */
   useEffect(() => {
      const token = localStorage.getItem("@rocketfood:token")
      const user = localStorage.getItem("@rocketfood:user")

      if(user && token) {
         api.defaults.headers.common['Authorization'] = `Bearer ${token}`

         setData({
            token,
            // passando para formato objeto json
            user: JSON.parse(user)
         })
      }

   }, [])

   return (
      /* compartilhando signIn e data.user (e o que mais quisermos) em nosso contexto para que 
         fique disponível em todo o nosso app */
      <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
         {children}
      </AuthContext.Provider>
   )
}

function useAuth() {
   const context = useContext(AuthContext)

   return context
}

export { AuthProvider, useAuth }

