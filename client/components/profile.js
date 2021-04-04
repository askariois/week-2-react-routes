import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'


const Prof = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Profile" />


      <div className="flex items-center justify-center">
        <div className="bg-yellow-300 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Profile</div>
        </div>
        <div className="bg-yellow-500 text-white font-bold rounded-lg border shadow-lg p-10">
          <Link to="/dashboard">Go To Root</Link>
        </div>
        <div className="bg-yellow-700 text-white font-bold rounded-lg border shadow-lg p-10">
          <Link to="/dashboard/main">Go To Main</Link>
        </div>
      </div>
      <div id="username">{user}</div>
    </div>
  )
}

Prof.propTypes = {}

export default Prof
