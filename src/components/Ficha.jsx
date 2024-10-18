import '../App.css'
import React from 'react'
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { Stack, Typography } from '@mui/material';
import AppGrid from '../AppGrid'; // Importa el componente AppGrid
/*import Ficha from './components/Ficha';*/

// Importación corregida de tu botón:
import { CustomButton } from 'milibreria';  // Importación del botón como "named export"

//import '../App.css'

function Ficha() {
 
    // Definimos los datos del animal (en este caso, un gato)
    const dato = {
      animal: 'Gato',
      imageUrl: '/cat-4189697_1280.jpg',  // URL de la imagen del gato
    }
  
    // Estado para contar cuántas veces se ha hecho clic en el botón
    const [count, setCount] = useState(0);
    
    // Función que se ejecuta cuando el botón es clicado
    function handleClick() {
      setCount(count + 1);  // Incrementa el contador
      alert('¡Me picaste!');  // Muestra una alerta
    }
  
    // Creamos un tema personalizado con Material-UI para modificar la paleta de colores
    const theme = createTheme({
      palette: {
        ochre: {
          main: '#E3D026',      // Color principal
          light: '#E9DB5D',     // Color claro
          dark: '#A29415',      // Color oscuro
          contrastText: '#242105',  // Color del texto
        },
      },
    });
  
    return (
      // Componente Stack que organiza los elementos en una columna, centrados y con espacio entre ellos
      <Stack direction="column" spacing={2} alignItems='center' justifyContent='space-evenly'>
        {/* Título que muestra el nombre del animal */}
        <Typography variant='h2'>Soy un {dato.animal} y vivo feliz</Typography>
  
        {/* Avatar que muestra la imagen del gato */}
        <Avatar className='imagen' src={dato.imageUrl} alt='img' sx={{ width: 400, height: 350 }} />
        
        {/* Proveedor de tema para aplicar el tema personalizado */}
        <ThemeProvider theme={theme}>
          {/* Botón personalizado */}
          <CustomButton 
            text={`Me picaste ${count} veces`} 
            txtcolor="white" 
            bgcolor="purple" 
            size="large" 
            onClick={handleClick} 
          />
        </ThemeProvider>

        {/* Código del botón original, comentado
        <Button variant='outlined' size='large' sx={{ color: 'purple', backgroundColor: 'black' }} onClick={handleClick}>
          Me picaste {count} veces
        </Button>
        */}

        {/* Se añade el componente AppGrid que contiene los 3 botones responsivos */}
        <AppGrid />
      </Stack>
    );
}

export default Ficha;
