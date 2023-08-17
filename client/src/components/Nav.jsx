import React from 'react'
import { AppBar, Toolbar, Grid, Typography, Button, Box, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

function Nav() {
  return (
    // <div>
    //   <nav>
    //     <Menu pointing secondary>
    //       <Menu.Item 
    //       name='home'
    //       as={Link}
    //       to='/home'/>
  
    //       <Menu.Item 
    //       name='about'
    //       as={Link} 
    //       to='/about'
    //       />
    //       <Menu.Item 
    //       name='portfolio'
    //       as={Link}
    //       to='/portfolio'/>

    //     </Menu>
    //   </nav>

    // </div>
    <AppBar>
      <Toolbar>
        <nav>
        <Grid container padding={1} sx={{ placeItems: 'center'}}>
          <Grid item paddingRight={2}>
            <IconButton >
            SAD
            </IconButton>
          </Grid>

          <Grid item paddingRight={2}>
            <Typography >About</Typography>
          </Grid>

          <Grid item paddingRight={2}>
          <Typography >Portfolio</Typography>
          </Grid>

          <Grid item paddingRight={2}>
            <Typography >Blog</Typography>
          </Grid>

          <Grid item paddingRight={2}>
            Resume
          </Grid>

          <Grid item >
            <Button>Contact me</Button>
          </Grid>
        </Grid>
        </nav>
      </Toolbar>
    </AppBar>
  )
}

export default Nav