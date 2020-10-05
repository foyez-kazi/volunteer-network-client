import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Layout } from './components/Layout'
import { NotFound } from './components/NotFound'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { PrivateRoute } from './components/PrivateRoute'
import { VolunteerRegister } from './components/VolunteerRegister'
import { Profile } from './components/Profile'
import { VolunteerList } from './components/VolunteerList'
import { CreateEvent } from './components/CreateEvent'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/volunteer-register">
          <VolunteerRegister />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/volunteer-list">
          <VolunteerList />
        </Route>
        <Route path="/create-event">
          <CreateEvent />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
