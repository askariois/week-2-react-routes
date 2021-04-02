import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'



const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Main</div>
      <Link to="/dashboard/profile/61bf9658-a1cc-42f0-8534-5c366aa3fe30">MainProfile</Link>
      <Link to="/dashboard">MainDashboard</Link>
    </div>
  )
}

Main.propTypes = {}

export default Main
