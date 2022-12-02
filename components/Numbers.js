import { Stack } from '@mui/material'
import React from 'react'

const Numbers = ({ maxNodes }) => {
  const nums = []

  for (let i = 0; i < maxNodes; i++) {
    nums.push(i)

    return <Stack>{i}</Stack>
  }
  return <Stack></Stack>
}

export default Numbers
