import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='notfound'>
    <div className='content'>
    <h1>404 Not Found</h1>
    <p>Ypur visited Page Not Found. Ypu may go back to Home Page</p>
    <Link to={"/"} className='btn'>Back to Home Page</Link>

    </div>
      
    </section>
  )
}

export default NotFound
