import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./global/carousel.css"

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
        articles: allStrapiArticle(sort: {order: DESC, fields: Date}) {
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
            <ul style={{marginLeft: `5rem`, marginRight: `5rem`}}>
            {data.articles.nodes.map(document => (
                <div key={document.id} style={{paddingBottom: `5rem`}}>
                    <h2>{document.Title}</h2>
                    <div style={{ display: "flex", justifyContent: "space-between"}}>
                        <p style={{margin:0}}>{document.user.username}</p>
                        <p style={{margin:0}}>{document.Date}</p>
                    </div>
                    <Slider {...settings} className="overflow-hidden" style={{backgroundColor: `black`}}>
                        {
                            document.Gallery.map((img) => {
                            return(
                                <Img key={img.id} fluid={img.localFile.childImageSharp.fluid} alt="preview-image"/>
                            )
                            })
                        }
                    </Slider>
                    <p style={{marginTop:`2rem`}}>{document.Description}</p>
                </div>
            ))}
            </ul>
        </div>
    )
}

export default Feed