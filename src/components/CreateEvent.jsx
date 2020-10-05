import { Grid } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export const CreateEvent = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Link to="/volunteer-list">Volunteer list</Link>
        <br />
        <Link to="/create-event">Add event</Link>
      </Grid>
      <Grid item xs={7}>
        <form>
          <input />
          <br />
          <input />
          <br />
          <input />
          <br />
          <button>Submit</button>
        </form>
      </Grid>
    </Grid>
  )
}
