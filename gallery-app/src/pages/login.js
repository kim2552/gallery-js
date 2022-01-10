import React from "react"
import { Link } from "gatsby"
import Login from '../components/Login'

import Layout from "../components/global/layout"

const LoginPage = ({ location, state, user }) => {
  const { state: routeState } = location
  console.log(routeState);
  const redirect = !routeState
    ? '/app/home'
    : routeState.redirect === 'app'
      ? '/app/home'
      : `/app/${routeState.redirect}`
  
  return (
    <Layout>
      <div style={{padding: `5rem`}}>
        <h1>Login</h1>
        <p>Please use your credentials to login</p>
        <div>
          <Login redirect={redirect} />
        </div>
      </div>
    </Layout>
  )
}

export default LoginPage