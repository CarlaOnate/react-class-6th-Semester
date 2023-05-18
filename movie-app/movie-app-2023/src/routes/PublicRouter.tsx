import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicRouter = () => {
  return (
   <>
    <div>Public router</div>
    <Outlet />
   </>
  )
}

export default PublicRouter