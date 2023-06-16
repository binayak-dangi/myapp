import React from 'react'
import { Link } from 'react-router-dom'

const TestNav = () => {
  return (
    <>
<ul className="d-flex bg-primary p-3">
    <li> <Link to='/' className='text-white p-2 text-decoration-none'>Home</Link></li>
    <li> <Link to='/first' className='text-white'>Demo</Link></li>
</ul>
    </>
  )
}

export default TestNav

