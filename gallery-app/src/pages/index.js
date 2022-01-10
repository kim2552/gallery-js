import * as React from "react"
import { navigate } from 'gatsby'

const IndexPage = () => (
  <div>
    {navigate('/app/home')}
  </div>
)

export default IndexPage