import React from 'react'

import { styled } from '@mui/material/styles'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Stack } from '@mui/system'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import Image from 'mui-image'

import RadioImage from '../components/ui/RadioImage'
import CheckboxImage from '../components/ui/CheckboxImage'
import Grid from '@mui/material/Grid'
import DragDrop from '../components/ui/DragDrop'

import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import Button from '@mui/material/Button'

// import BpIconCreative from '../components/ui/BpIcons'
// import BpCheckedIconCreative from '../components/ui/BpIcons'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === 'light' ? '#rgba(255,206,1,1)' : '#308fe8',
  },
}))

const Brief = () => {
  const [projectOutput, setProjectOutput] = useState('')
  const [projectLevel, setProjectLevel] = useState(' ')
  const [dateValue, setDateValue] = React.useState(dayjs().toDate())

  const handleProjectLevelChange = (event) => {
    setProjectLevel(event.target.value)
  }

  const handleChange = (newValue) => {
    setDateValue(newValue)
  }

  async function submitHandler(event) {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value
    const enteredDate = yearInputRef.current.value
    const form = event.currentTarget
    var enteredImage = null

    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === 'file'
    )

    if (fileInput.files[0] !== undefined) {
      const formData = new FormData()
      for (const file of fileInput.files) {
        formData.append('file', file)
      }

      formData.append('upload_preset', 'meme-almanac')

      const imagedata = await fetch(
        'https://api.cloudinary.com/v1_1/dxdjkofgb/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      ).then((r) => r.json())

      console.log(imagedata)
      console.log(imagedata.secure_url)
      setImageSrc(imagedata.secure_url)
      setUploadData(imagedata)

      enteredImage = imagedata.secure_url
    } else {
      enteredImage = 'null'
    }

    const data = await fetch('/api/memes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        enteredName,
        enteredDescription,
        enteredDate,
        enteredImage,
      }),
    })

    formRef.current.reset()
    setImageSrc(null)
    toast.success(
      `${
        randomMemeName().charAt(0).toUpperCase() + randomMemeName().slice(1)
      } úspěšně přidán!`
    )
  }

  const radioImages = [
    {
      value: 'strategy',
      image: 'imgs/crlnWorkshop.jpeg',
      label: 'Nevím co potřebuji',
    },
    {
      value: 'creative',
      image: 'imgs/creativeDisc.jpeg',
      label: 'Vím co potřebuji. Nevím jak.',
    },
    {
      value: 'robot',
      image: 'imgs/robot.jpeg',
      label: 'Hotové zadání',
    },
  ]

  const checkboxImages = [
    {
      value: 'content document',
      image: 'imgs/crlnDoc.jpeg',
      label: 'Obsahový dokument',
    },
    {
      value: 'pdf',
      image: 'imgs/crlnpdf.jpeg',
      label: 'PDF Náhled',
    },
    {
      value: 'print',
      image: 'imgs/crlnPrint.jpeg',
      label: 'Tisková data',
    },
    {
      value: 'video',
      image: 'imgs/crlnMovie.jpeg',
      label: 'Video',
    },
    {
      value: 'foto',
      image: 'imgs/crlnPhoto.jpeg',
      label: 'Fotografie',
    },
    {
      value: 'foto',
      image: 'imgs/crlnPhoto.jpeg',
      label: 'Webová stránka',
    },
    {
      value: 'analytical',
      image: 'imgs/crlnAnal.jpeg',
      label: 'Analytická data',
    },
    {
      value: 'ms office',
      image: 'imgs/crlnMs.jpeg',
      label: 'MS Office šablona',
    },
    {
      value: 'done product',
      image: 'imgs/crlnProduct.jpeg',
      label: 'Hotový produkt',
    },
    {
      value: 'marketing support',
      image: 'imgs/crlnSupport.jpeg',
      label: 'Podpora vašeho MKT týmu',
    },
    {
      value: 'Workshop',
      image: 'imgs/crlnWorkshop.jpeg',
      label: 'Workshop / debata',
    },
  ]

  return (
    <Stack
      sx={{
        zIndex: 100,
        boxShadow: 3,
        // alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        // backgroundImage:
        //   'radial-gradient(circle at center center, rgba(255, 204, 0, 0.5), #004), repeating-radial-gradient(circle at center center, rgba(0, 10, 0, 0.2), rgba(255, 204, 0, 0.5), 10px, transparent 35px, transparent 30px)',
        // backgroundBlendMode: 'multiply',
        backgroundColor: '#171717',
        // width: '100vw',
        // height: '100vh',
      }}
    >
      <Stack maxWidth={'1140px'} minWidth={'50vw'} m={'auto'} py={10}>
        <Stack>
          <Stack direction={'column'}>
            {/* <Numbers /> */}
            <BorderLinearProgress variant="determinate" value={50} />
          </Stack>
        </Stack>
        <Stack
          my={4}
          sx={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h2" color="initial">
            Název formuláře
          </Typography>
          <Typography variant="h4" color="initial">
            Popis části
          </Typography>
        </Stack>
        <form onSubmit={submitHandler} action="">
          <Stack
            spacing={2}
            sx={{
              zIndex: 100,
              px: 2,
              py: 4,
              backdropFilter: 'blur(25px)',
              borderRadius: '20px',
              border: '2px solid rgba(255,206,1,1)',
              backgroundColor: 'rgba(255,206,1,0.05)',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Stack spacing={1}>
              <Typography variant="h5" color="initial">
                {' '}
                Název projektu
              </Typography>
              <TextField
                id=""
                color="primary"
                sx={{
                  backdropFilter: 'blur(50px)',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(255,206,1,0.1)',
                  color: '#fff',
                }}
              />
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h5" color="initial">
                {' '}
                Brief / Popis projektu (Cílová skupina, cíl, ...):
              </Typography>
              <TextField
                multiline
                id=""
                color="primary"
                minRows={4}
                sx={{
                  backdropFilter: 'blur(50px)',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(255,206,1,0.1)',
                  color: '#fff',
                }}
              />
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h5" color="initial">
                {' '}
                Úroveň zadání:
              </Typography>
              <RadioGroup
                row
                value={projectLevel}
                onChange={handleProjectLevelChange}
                sx={{
                  alignItems: 'left',
                  justifyContent: 'left',
                  display: 'flex',
                }}
              >
                {radioImages.map((img) => (
                  <RadioImage
                    image={img.image}
                    value={img.value}
                    label={img.label}
                  />
                ))}
              </RadioGroup>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h5" color="initial">
                {' '}
                Očekávaný výstup:
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="start"
                justifyItems="space-between"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
                m="none"
                p="none"
              >
                {checkboxImages.map((img) => (
                  <CheckboxImage
                    image={img.image}
                    value={img.value}
                    label={img.label}
                  />
                ))}
              </Grid>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h5" color="initial">
                {' '}
                Očekávaný výstup:
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  openTo="year"
                  inputFormat="MM/DD/YYYY"
                  value={dateValue}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="primary"
                      sx={{
                        backdropFilter: 'blur(50px)',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255,206,1,0.1)',
                        color: '#fff',
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h5" color="initial">
                {' '}
                Odhad náročnosti (počet hodin):
              </Typography>
              <TextField
                id=""
                color="primary"
                sx={{
                  backdropFilter: 'blur(50px)',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(255,206,1,0.1)',
                  color: '#fff',
                }}
              />
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h5" color="initial" size="large">
                {' '}
                Podklady:
              </Typography>
              <DragDrop />
            </Stack>
            <Button
              variant="outlined"
              color="primary"
              sx={{ height: '3rem', fontSize: '1rem' }}
              type="submit"
            >
              Odeslat
            </Button>
          </Stack>
        </form>
      </Stack>
    </Stack>
  )
}

export default Brief
