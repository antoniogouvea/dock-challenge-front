import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import Account from './Account'
import { AuthProvider } from './Auth/AuthProvider'
import { RequireAuth } from './Auth/RequireAuth'
import Dash from './Dash'
import { lightTheme } from './Dash/styled'

import Login from './Login'
import User from './User'
import AccountEdit from './AccountEdit'


function App() {
  return (
    <>
      <AuthProvider>
        <GlobalStyles />
        <ThemeProvider theme={lightTheme}>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Dash />} />
              <Route path="/login" element={<Login />} />
              <Route path="/users" element={<RequireAuth ><User /></RequireAuth>} />
              <Route path="/dash" element={<RequireAuth ><Dash /></RequireAuth>} />
              <Route path="/account" element={<RequireAuth ><Account /></RequireAuth>} />
              <Route path="/account/:id" element={<RequireAuth ><AccountEdit /></RequireAuth>} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>

    </>

  )

}

export default App
