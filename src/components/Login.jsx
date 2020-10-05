import { Card, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useLocation } from 'react-router-dom'

import { GoogleAuth } from './GoogleAuth'

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    padding: 50,
    textAlign: 'center',
    margin: '50px auto',
  },
})

export const Login = () => {
  const classes = useStyles()
  const location = useLocation()

  const { from } = location.state || { from: { pathname: '/' } }

  return (
    <Card className={classes.root} variant="outlined">
      <Typography variant="h5" component="h2">
        Login with
      </Typography>
      <GoogleAuth from={from} />
    </Card>
  )
}
