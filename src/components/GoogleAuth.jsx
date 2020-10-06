import { Button, makeStyles } from '@material-ui/core'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { UserContext } from '../context/UserProvider'
import firebase, { signInWithPopup } from '../utils/firebase'
import Google from '../assets/logos/google.png'

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '10px 25px',
    fontWeight: 'normal',
    borderRadius: '20px',

    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
  },
}))

export const GoogleAuth = ({ from }) => {
  const classes = useStyles()
  const { setCurrentUser } = useContext(UserContext)
  const history = useHistory()

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user, error } = await signInWithPopup(provider)

    if (!error) {
      setCurrentUser(user)
      history.replace(from)
    }
  }

  return (
    <div>
      <Button
        className={classes.button}
        variant="outlined"
        startIcon={<img width="30" height="30" src={Google} alt="google" />}
        onClick={() => signInWithGoogle()}
      >
        Continue with Google
      </Button>
    </div>
  )
}
