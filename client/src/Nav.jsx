import React from 'react'
import { AppBar, Toolbar, Grid, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <AppBar>
      <Toolbar>
        <Grid container padding={1} >
          <Grid item sx={3} paddingRight={2}>
            Logo Here
          </Grid>
          <Grid item sx={2} paddingRight={2}>
            <Typography component={Link} to='/about' >About</Typography>
          </Grid>
          <Grid item sx={2} paddingRight={2}>
            Portfolio
          </Grid>
          <Grid item sx={2} paddingRight={2}>
            <Typography component={Link} to="http://medium.com/@sarah.schmidtdean">Blog</Typography>
          </Grid>
          <Grid item sx={2} paddingRight={2}>
            Resume
          </Grid>
          <Grid item sx={2}>
            <Button>Contact me</Button>
            Contact me
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Nav