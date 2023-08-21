import React from 'react'
import { BottomNavigation, Icon, IconButton, Typography, Box, Paper, BottomNavigationAction } from '@mui/material'
import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

function Footer() {
  return (
      <Box>
        <Paper
      >
        <BottomNavigation>
          <BottomNavigationAction /> 
          <BottomNavigationAction />
        {/* <IconButton to='http://github.com/sarahadean'>
        <FaGithub/>
        </IconButton> */}
        {/* <IconButton to='http://linkedin.com/in/sarah-a-dean/'>
        <FaLinkedinIn/>
        </IconButton> */}
      </BottomNavigation>
        </Paper>
      </Box>
      

  )
}

export default Footer