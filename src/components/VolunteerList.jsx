import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export const VolunteerList = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Link to="/volunteer-list">Volunteer list</Link>
          <br />
          <Link to="/create-event">Create an event</Link>
        </Grid>
        <Grid item xs={8}>
          <h2>Volunteer register list</h2>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  )
}
