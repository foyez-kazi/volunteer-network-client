import { Button, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logos/logo.png'
import { UserContext } from '../context/UserProvider'
import { Logout } from './Logout'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    // flex: 1,
    marginRight: 'auto',
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  ml: {
    marginLeft: '10px',
  },
}))

export const Header = () => {
  const classes = useStyles()
  const { currentUser } = useContext(UserContext)

  return (
    <Toolbar className={classes.toolbar}>
      <IconButton className={classes.toolbarTitle}>
        <img src={Logo} alt="logo" width="100" />
      </IconButton>
      <Button size="small">Home</Button>
      <Button size="small">Donation</Button>
      <Button size="small">Events</Button>
      <Button size="small">Blog</Button>
      {currentUser ? (
        <>
          <Link to="volunteer-list">
            <Button variant="outlined" size="small">
              admin
            </Button>
          </Link>
          <p className={classes.ml}>{currentUser.displayName}</p>
          <Logout />
        </>
      ) : (
        <Link to="/login">
          <Button
            className={classes.registerBtn}
            variant="contained"
            color="primary"
            size="small"
          >
            register
          </Button>
        </Link>
      )}
    </Toolbar>
  )
}
