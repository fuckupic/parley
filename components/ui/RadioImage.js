import { styled } from '@mui/material/styles'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'

import { Box, Stack } from '@mui/material'

const RadioImage = ({ image, value, label }) => {
  const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '20px',
    width: '150px',
    height: '150px',
    backgroundImage: `url('${image}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    filter: 'grayscale(100%)',
    'input:hover ~ &': {
      backgroundColor: theme.palette.mode === 'dark' ? '#3d1' : '#ebf1f5',
    },
  }))

  const BpChecked = styled(BpIcon)({
    '&': {
      filter: 'grayscale(0%)',
    },
    '&:before': {
      display: 'block',
      width: '100%',
      height: '100%',
      border: '3px solid #fff',
      borderRadius: '20px',
      content: '""',
    },
    '&:after': {
      display: 'flex',
      position: 'absolute',
      top: '0',
      right: '0',
      width: 30,
      height: 30,
      border: '3px solid #fff',
      borderRadius: '20px',
      justifyContent: 'center',
      alignItems: 'center',
      content: '"✔"',
      color: '#fff',
      backgroundColor: 'rgba(255,204,2, 0.8)',
      backdropFilter: 'blur(10px)',
      transform: 'translate(50%, -50%)',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  })

  return (
    <Stack
      sx={{
        position: 'relative',
        maxWidth: '150px',
        m: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FormControlLabel
        value={value}
        control={<Radio icon={<BpIcon />} checkedIcon={<BpChecked />} />}
        labelPlacement="bottom"
      />
      <FormLabel
        sx={{
          position: 'absolute',
          bottom: '0',
          my: 1,
          px: 3,
          py: 0.5,
          width: '100%',
          color: 'white',
          fontWeight: '500',
          ml: 'auto',
          mr: 'auto',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.33)',
          backdropFilter: 'blur(3px)',
          borderRadius: ' 0 0 20px 20px  ',
          fontSize: '0.9rem',
        }}
      >
        {label}
      </FormLabel>
    </Stack>
  )
}

export default RadioImage
