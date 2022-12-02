import { styled } from '@mui/material/styles'

export const BpIconRobot = styled('span')(({ theme }) => ({
  borderRadius: '20px',
  width: 150,
  height: 150,
  backgroundImage: "url('imgs/robot.jpeg')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#3d1' : '#ebf1f5',
  },
}))

export const BpCheckedIcon = styled(BpIconRobot)({
  '&:before': {
    display: 'block',
    width: '96%',
    height: '96%',
    border: '3px solid #fff',
    borderRadius: '20px',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
})

export const BpIconCreative = styled('span')(({ theme }) => ({
  borderRadius: '20px',
  width: 150,
  height: 150,
  backgroundImage: "url('imgs/creativeDisc.jpeg')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#3d1' : '#ebf1f5',
  },
}))
