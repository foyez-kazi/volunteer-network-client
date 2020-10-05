import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from './Card'
import { Header } from './Header'
import { data } from '../data'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '100px',
  },
}))

export const Home = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Header />
      <main className={classes.root}>
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item xs={3} key={item.id}>
              <Link to={`volunteer-register?event=${item.title}`}>
                <Card item={item} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </main>

      {/* <Link to="/private">Go to private Component</Link> */}
    </Container>
  )
}
