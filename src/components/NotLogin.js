import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotLogin = () => {
  return (
    <div>
        <h1>Please Log In</h1>
        <Link to="/">
        <Button>GO TO SIGN UP PAGE</Button>
        </Link>
    </div>

  )
}

export default NotLogin