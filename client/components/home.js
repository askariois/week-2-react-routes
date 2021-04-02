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
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Route exact path="/dashboard" component={() => <Dash />} />
        </div>
        <div className="bg-indigo-900 text-white font-bold rounded-lg border shadow-lg p-10">
          <Route exact path="/dashboard/profile/:username" component={() => <Prof />} />
        </div>

        <div className="bg-indigo-700 text-white font-bold rounded-lg border shadow-lg p-10">
          <Route exact path="/dashboard/main" component={() => <Main />} />
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
