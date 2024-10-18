import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

function FormRegistro() {
  const [data, setData] = useState({ name: '', breed: '' });

  const handleSubmit = (e) => {
    // Para que no mande el formulario, sino que haga lo que yo le diga
    e.preventDefault();
    console.log('Datos enviados:', data);
  };

  const handleChangeName = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const handleChangeBreed = (e) => {
    setData({
      ...data,
      breed: e.target.value,
    });
  };

  return (
    <Container>
      <Paper elevation={10} square={false} sx={{ textAlign: 'center' }}>
        <Typography variant='h6' color='primary' sx={{ mt: 10, mb: 4 }}>
          Registra tu mascota
        </Typography>
        <Box component='form' onSubmit={handleSubmit}>
          <Grid container spacing={20}>
            <Grid xs={30} sm={10}>
              <TextField
                required
                label='Nombre Mascota'
                variant='outlined'
                fullWidth
                value={data.name}
                onChange={handleChangeName}
              />
            </Grid>
            <Grid item xs={30} sm={10}>
              <TextField
                label='Raza'
                variant='outlined'
                fullWidth
                value={data.breed}
                onChange={handleChangeBreed}
              />
            </Grid>
            <Grid item xs={30}>
              <Button type='submit' variant='outlined' fullWidth>
                Registrar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default FormRegistro;
