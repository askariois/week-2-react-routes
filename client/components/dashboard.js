import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'


const Dash = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center">
        <div className="bg-yellow-300 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Dashboard</div>
        </div>
        <div className="bg-yellow-500 text-white font-bold rounded-lg border shadow-lg p-10">
          <Link to="/dashboard/profile/61bf9658-a1cc-42f0-8534-5c366aa3fe30">Go To Profile</Link>
        </div>
        <div className="bg-yellow-700 text-white font-bold rounded-lg border shadow-lg p-10">
          <Link to="/dashboard/main">Go To Main</Link>
        </div>
      </div>
    </div>
  )
}

Dash.propTypes = {}

export default Dash
