import * as React from "react"
import { navigate } from 'gatsby'
import { isLoggedIn } from "../services/auth"

const IndexPage = () => (
  <div>
    {isLoggedIn() ? (
      navigate('/app/home')
    ) : (
      navigate('/app/login')
    )}
  </div>
)

export default IndexPage