import axios from 'axios'

// * CUSTOMER API
// Config this axios intance to reiceive the base URL bellow
const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API,
})

// export { reservationApi, waitlistApi, customerApi }
export { api }
