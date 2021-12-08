import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick"

import Layout from "../components/layout"
import Seo from "../components/seo"

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false
}

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.Title}</Link>
          </h2>
          <Slider {...settings} className="overflow-hidden">
          <div>
          {
            document.node.Gallery.map((img) => {
              return(
                <GatsbyImage key={img.id} image={img.localFile.childImageSharp.gatsbyImageData} alt="preview-image"/>
              )
            })
          }
          </div>
          </Slider>
          <p>{document.node.Description}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query IndexQuery {
  allStrapiArticle {
    edges {
      node {
        id
        Title
        Description
        Gallery {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 500
                height: 500
                layout: FIXED
                )
            }
          }
        }
        user {
          username
        }
      }
    }
  }
}
`