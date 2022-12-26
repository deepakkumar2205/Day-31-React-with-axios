import './App.css';
import React, { useContext, useState }  from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './home';
import Login from './Login';
import { All } from './All';
import Teachers from './Teachers';
import { Students } from './Students';
import Provider from './Provider';
import ProtectedRoute from './ProtectedRouter';
import Dashboard from './dashboard';
import Context from './context';
import { extendTheme } from "@chakra-ui/react"
import { Form } from './form';

function App() {
  let isLoggedin  = localStorage.getItem("loggedin");
  const shop = useContext(Context);

  const theme = extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: shop.colormode
  })

  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode='black' />
     
        <BrowserRouter>
          
          {shop.loginState === 'jwejdfodsj-sdfnsdofsdjosdjf-wenrwelrm-saodfjsddom-sndfd'? <Dashboard/> : <div></div>}
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/' element={<ProtectedRoute isLoggedin={isLoggedin}><Home/></ProtectedRoute>} />
            <Route path='/all' element={<ProtectedRoute isLoggedin={isLoggedin}><All/></ProtectedRoute>} />
            <Route path='/teachers' element={<ProtectedRoute isLoggedin={isLoggedin}><Teachers/></ProtectedRoute>} />
            <Route path='/students' element={<ProtectedRoute isLoggedin={isLoggedin}><Students/></ProtectedRoute>} />
            <Route path='/form' element={<ProtectedRoute isLoggedin={isLoggedin}><Form/></ProtectedRoute>} />
            <Route path='/form/:id' element={<ProtectedRoute isLoggedin={isLoggedin}><Form/></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
        </ChakraProvider>  
    </div>
  );
}

export default App;
