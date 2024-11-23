import React from 'react'
import MainRouter from './MainRouter'
import AuthRouter from './AuthRouter'

const Routers = () => {
   return (
      1 > 2 ? <MainRouter /> : <AuthRouter />
   )
}

export default Routers
