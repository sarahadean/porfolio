import React from 'react'
import { Button, Container, Typography } from '@mui/material'

function Home() {
  return (
    <>
    <Container>
        <Typography variant='h2'>
            Hello! My name is Sarah Dean
        </Typography>
        <img src="https://img.freepik.com/premium-vector/simple-cat-coding-laptop-tech-software-engineer-design-vector-illustration_773815-96.jpg?w=2000" alt="Cat" width={200}/>
        <Typography variant='h4'>Full-Stack Software Engineer</Typography>
        </Container>
    </>
  )
}

export default Home