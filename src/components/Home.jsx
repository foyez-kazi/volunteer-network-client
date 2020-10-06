import { Container, Grid, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import allService from '../services/all'
import { Card } from './Card'
import { Header } from './Header'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '100px',
  },
}))

export const Home = () => {
  const classes = useStyles()
  const [events, setEvents] = useState([])

  useEffect(() => {
    allService.getEvents().then((events) => {
      setEvents(events)
    })
  }, [])

  return (
    <Container maxWidth="lg">
      <Header />
      <main className={classes.root}>
        <Grid container spacing={3}>
          {events.map((event) => (
            <Grid item xs={3} key={event._id}>
              <Link
                to={`volunteer-register?event=${event.eventTitle}&bannerUrl=${event.banner}`}
              >
                <Card item={event} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </main>
    </Container>
  )
}
