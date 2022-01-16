import * as React from "react"
import { navigate } from 'gatsby'

const IndexPage = () => {
  
  if (typeof window !== 'undefined') {
  return(
    <div>
      {navigate('/app/home')}
    </div>
  )
  }else{
    return(
      <div></div>
    )
  }
}

export default IndexPage