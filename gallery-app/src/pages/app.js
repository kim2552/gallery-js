import React, { useEffect } from "react"
import { Router } from "@reach/router"
import { navigate } from "gatsby"

import useAuth from "../hooks/useAuth"

import Layout from "../components/global/layout"
import Feed from "../components/feed"

const PrivateRoute = ({ component: Component, location, authenticated, ...rest }) => {
  if (!authenticated && location.pathname !== `/login`) {
      navigate("/login")
      return null
  }
  return <Component {...rest} />
}

const App = ({location}) => {
  const { state, isAuthenticated } = useAuth()
  const redirect = location.pathname.split('/').pop()
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { redirect }});
    }
  }, [isAuthenticated, redirect]);

  return(
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/home" component={Feed} authenticated={isAuthenticated}/>
      </Router>
    </Layout>
  )
}

export default App