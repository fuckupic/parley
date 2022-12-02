import * as React from 'react'
import { styled } from '@mui/material/styles'
import { alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'
// import LogButton from './LogButton'
// import SearchIcon from '@mui/icons-material/Search'

const NavBar = ({ user, isLoading }) => {
  const router = useRouter()
  const handleBriefClick = (e) => {
    e.preventDefault()
    router.push('/brief')
  }

  return (
    <Box sx={{ flexGrow: 1, zIndex: 100 }} position={'relative'}>
      <Stack
        direction={'row'}
        width="100%"
        height="5em"
        justifyContent="space-between"
        alignItems="center"
        alignContent={'center'}
        margin={'0 auto'}
        display={'flex'}
        maxWidth={'1280px'}
      >
        <Button variant="text" color="primary">
          {' '}
          Briefy ke schválení
        </Button>
        <Button variant="text" color="primary">
          {' '}
          Dashboard
        </Button>
        <Button variant="outlined" color="primary" onClick={handleBriefClick}>
          {' '}
          Nový brief
        </Button>
        <Button variant="text" color="primary">
          {' '}
          Login
        </Button>
      </Stack>
    </Box>
  )
}

export default NavBar
