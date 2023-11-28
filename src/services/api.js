import axios from 'axios'

export const api = axios.create({
   baseURL: 'https://backfood-api.onrender.com'
})

