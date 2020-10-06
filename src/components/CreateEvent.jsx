import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  TextField,
  Typography,
  Container,
} from '@material-ui/core'
import allService from '../services/all'
import Logo from '../assets/logos/logo.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    margin: '50px auto',
    padding: '10px 30px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  sidebar: {
    padding: 10,
    marginTop: 50,
  },
})

export const CreateEvent = () => {
  const classes = useStyles()
  const [event, setEvent] = useState({
    eventTitle: '',
    description: '',
    eventDate: '',
    bannerUrl: '',
  })
  const history = useHistory()

  const handleChange = (e) => {
    const { name, value } = e.target
    setEvent({ ...event, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    allService.createEvent(event).then((ev) => {
      history.replace('/')
    })
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div className={classes.sidebar}>
            <div style={{ marginBottom: '25px' }}>
              <img src={Logo} alt="logo" width="100" />
            </div>
            <Link to="/volunteer-list">Volunteer list</Link>
            <br />
            <Link to="/create-event">Add event</Link>
          </div>
        </Grid>
        <Grid item xs={7}>
          <form onSubmit={handleSubmit}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Add event
                </Typography>
                <TextField
                  fullWidth
                  label="Event Title"
                  name="eventTitle"
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Event Date"
                  name="eventDate"
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Banner Url"
                  name="bannerUrl"
                  onChange={handleChange}
                />
              </CardContent>
              <CardActions>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </CardActions>
            </Card>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}
