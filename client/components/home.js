import React from 'react'
import { Route } from 'react-router-dom'

import Header from './header'
import Dash from './dashboard'
import Main from './main'
import Prof from './profile'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <Route exact path="/dashboard" component={() => <Dash />} />
        <Route exact path="/dashboard/main" component={() => <Main />} />
        <Route exact path="/dashboard/profile/:username" component={() => <Prof />} />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
