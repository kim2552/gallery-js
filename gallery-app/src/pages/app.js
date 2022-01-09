import React from "react"
import { Router } from "@reach/router"
import { navigate } from "gatsby"

import { isLoggedIn } from "../services/auth"

import Layout from "../components/global/layout"
import Profile from "../components/profile"
import Login from "../components/login"
import Feed from "../components/feed"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
    if (!isLoggedIn() && location.pathname !== `/app/login`) {
        navigate("/app/login")
        return null
    }
    return <Component {...rest} />
}

const App = () => (
  <Layout>
    <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <PrivateRoute path="/app/home" component={Feed}/>
        <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App