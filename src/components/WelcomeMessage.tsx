import { Box } from '@material-ui/core'
import React from 'react'
interface WelcomeMessageProps{
  position:string;
  country?:string
}
const WelcomeMessage = ({position,country='Some where'}:WelcomeMessageProps) => {
  return (
    <Box mb={1} textAlign='center'>
      {position} {country}
    </Box>
  )
}

export default WelcomeMessage
