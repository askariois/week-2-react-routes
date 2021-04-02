import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'


const Dash = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/61bf9658-a1cc-42f0-8534-5c366aa3fe30">DashboardProfile</Link>
      <Link to="/dashboard/main">DashboardMain</Link>
    </div>
  )
}

Dash.propTypes = {}

export default Dash
