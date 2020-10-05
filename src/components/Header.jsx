import React from 'react'
import {
  Button,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Search as SearchIcon } from '@material-ui/icons'

import Logo from '../assets/logos/logo.png'

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
  registerBtn: {
    marginRight: '12px',
  },
}))

export const Header = () => {
  const classes = useStyles()

  return (
    <Toolbar className={classes.toolbar}>
      <IconButton className={classes.toolbarTitle}>
        <img src={Logo} alt="logo" width="100" />
      </IconButton>
      {/* <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Network
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton> */}
      <Button size="small">Home</Button>
      <Button size="small">Donation</Button>
      <Button size="small">Events</Button>
      <Button size="small">Blog</Button>
      <Button
        className={classes.registerBtn}
        variant="contained"
        color="primary"
        size="small"
      >
        register
      </Button>
      <Link to="volunteer-list">
        <Button variant="outlined" size="small">
          admin
        </Button>
      </Link>
    </Toolbar>
  )
}
