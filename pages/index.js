import Head from 'next/head'
import Image from 'next/image'
import Button from '@mui/material/Button'
import { Box, Stack } from '@mui/material'

import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const handleBriefClick = (e) => {
    e.preventDefault()
    router.push('/brief')
  }
  return (
    <div>
      <Box
        width={'100%'}
        height={'100vh'}
        display={'flex'}
        sx={{ justifyContent: 'center', alignContent: 'center' }}
      >
        <Stack
          width={'50%'}
          height={'100vh'}
          position={'relative'}
          sx={{ justifyContent: 'center', alignContent: 'center' }}
          maxWidth={'1280px'}
        >
          <Button variant="text" color="primary">
            {' '}
            Login
          </Button>
          <Button variant="text" color="primary">
            {' '}
            Briefy ke schválení
          </Button>
          <Button variant="text" color="primary">
            {' '}
            Zakázky
          </Button>
          <Button variant="outlined" color="primary" onClick={handleBriefClick}>
            {' '}
            Nový brief
          </Button>
        </Stack>
      </Box>
    </div>
  )
}
