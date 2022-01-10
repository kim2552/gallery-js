/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import NavBar from "./nav-bar"
import "./layout.css"

import useAuth from "../../hooks/useAuth"
import feed_end_img from '../../images/end_of_feed.png'

const Layout = ({ children }) => {
  const { state, isAuthenticated } = useAuth()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{backgroundColor: `#F59A9A`}}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <NavBar />
        <br></br>
        <main style={{paddingTop: "3rem", backgroundColor: `#F0DCD3`}}>{children}</main>
        {isAuthenticated ? (
          <img style={{margin: 0}} src={feed_end_img} alt="End of Feed Image"></img>
        ) : (
          null
        )}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
