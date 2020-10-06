import {
  makeStyles,
  Container,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import allService from '../services/all'
import Logo from '../assets/logos/logo.png'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  sidebar: {
    padding: 10,
    marginTop: 50,
  },
})

export const VolunteerList = () => {
  const classes = useStyles()
  const [volunteers, setVolunteers] = useState([])

  useEffect(() => {
    allService.getVolunteers().then((volunteers) => {
      setVolunteers(volunteers)
    })
  }, [])

  const deleteVolunteerList = (id) => {
    allService.deleteVolunteer(id).then(() => {
      setVolunteers(volunteers.filter((vol) => vol._id !== id))
    })
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <div className={classes.sidebar}>
            <div style={{ marginBottom: '25px' }}>
              <img src={Logo} alt="logo" width="100" />
            </div>
            <Link to="/volunteer-list">Volunteer list</Link>
            <br />
            <Link to="/create-event">Create an event</Link>
          </div>
        </Grid>
        <Grid item xs={8}>
          <h2>Volunteer register list</h2>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Email ID</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Registating Date</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Volunteer list</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Action</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {volunteers.map((vol) => (
                  <TableRow key={vol._id}>
                    <TableCell component="th" scope="row">
                      {vol.name}
                    </TableCell>
                    <TableCell align="center">{vol.email}</TableCell>
                    <TableCell align="center">{vol.date}</TableCell>
                    <TableCell align="center">{vol.volunteerList}</TableCell>
                    <TableCell align="center">
                      <Button onClick={() => deleteVolunteerList(vol._id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  )
}
