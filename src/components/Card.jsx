import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '100px',
  },
  paper: {
    boxShadow: 'none',
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  paperTextBox: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '20%',
  },
  paperText: {
    color: 'white',
    // fontSize: '20px',
    fontWeight: 'bold',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export const Card = ({ item }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <img className={classes.img} src={item.banner} alt="test" />
      <div
        className={classes.paperTextBox}
        style={{ backgroundColor: 'green' }}
      >
        <div className={classes.paperText}>{item.eventTitle}</div>
      </div>
    </Paper>
  )
}
