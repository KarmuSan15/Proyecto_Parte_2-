import './App.css'
import React from 'react'
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Stack, Typography } from '@mui/material';
/*import AppGrid from './AppGrid';*/ // Importa el componente AppGrid
import Ficha from './components/Ficha'
/*import FormRegistro from './components/FormRegistro'*/ 

//import './App.css'

function App() {
  return (
    <>
      <Ficha />
      </>
      /*<FormRegistro />*/
    
  )
}

export default App;