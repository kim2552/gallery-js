import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
}

function Feed() {
    const data = useStaticQuery(graphql`{
        articles: allStrapiArticle {
            nodes {
                strapiId
                Title
                Description
                Date
                Gallery {
                  localFile {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                  }
                }
                user{
                    username
                }
            }
        }
    }`)

    return(
        <div>
            <ul>
            {data.articles.nodes.map(document => (
                <div key={document.id}>
                <h2>{document.Title}</h2>
                <Slider {...settings} className="overflow-hidden">
                    {
                        document.Gallery.map((img) => {
                        return(
                            <Img key={img.id} fluid={img.localFile.childImageSharp.fluid} alt="preview-image"/>
                        )
                        })
                    }
                </Slider>
                <p>{document.Date}</p>
                <h3>{document.user.username}</h3>
                <p>{document.Description}</p>
                </div>
            ))}
            </ul>
        </div>
    )
}

export default Feed