import { Button, Container, Grid, makeStyles, Paper } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { Header } from './Header'
import { UserContext } from '../context/UserProvider'
import allService from '../services/all'

const useStyles = makeStyles({
  root: {
    marginTop: 50,
  },
  paper: {
    padding: 10,
  },
})

export const Profile = () => {
  const classes = useStyles()
  const [volunteerList, setVolunteerList] = useState([])
  const { currentUser } = useContext(UserContext)

  useEffect(() => {
    if (currentUser) {
      allService.getVolunteersByEmail(currentUser.email).then((volunteers) => {
        setVolunteerList(volunteers)
      })
    }
  }, [currentUser])

  const deleteVolunteerList = (id) => {
    allService.deleteVolunteer(id).then(() => {
      setVolunteerList(volunteerList.filter((vol) => vol._id !== id))
    })
  }

  return (
    <Container>
      <Header />
      <div className={classes.root}>
        <Grid container spacing={5}>
          {volunteerList.map((vol) => (
            <Grid item xs={5} key={vol._id}>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={5}>
                    <img
                      src={vol.bannerUrl}
                      alt={vol.volunteerList}
                      width="100%"
                    />
                  </Grid>
                  <Grid align="right" item xs={6}>
                    <div>{vol.volunteerList}</div>
                    <div>{vol.date}</div>
                    <br />
                    <br />
                    <Button
                      variant="outlined"
                      onClick={() => deleteVolunteerList(vol._id)}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  )
}
