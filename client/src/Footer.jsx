import React from 'react'
import { BottomNavigation, Icon, IconButton, Typography, Box, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

function Footer() {
  return (
      <Box>
        <Paper
      >
        <BottomNavigation>
        <IconButton component={Link} to='http://github.com/sarahadean'>
        <FaGithub/>
        </IconButton>
        <IconButton component={Link} to='http://linkedin.com/in/sarah-a-dean/'>
        <FaLinkedinIn/>
        </IconButton>
      </BottomNavigation>
        </Paper>
      </Box>
      

  )
}

export default Footer