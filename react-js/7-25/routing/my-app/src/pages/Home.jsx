import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    <h1>home page</h1>
      <Link to={'/about'}>gotoabout</Link>
    </div>
  )
}

export default Home
