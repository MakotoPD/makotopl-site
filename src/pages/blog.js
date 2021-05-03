import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet";
import Img from "gatsby-image"


import NavBar from "../components/navbar"
import Hero from "../components/hero"
import Foter from "../components/footer"




const Blog = ({ data }) => {
    const articles = data.allDatoCmsArticle.edges
    return (
        
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Makoto. - Blog</title>
            <meta name="description" content="Makoto. - Logos, Banners, Websites. Become recognizable with a beautiful website and logo design." />
            <meta property="og:type" content="website" />

            <meta property="og:url" content="https://www.makoto.pl/" />
            <meta property="og:title" content="Makoto. - Logos, Banners, Websites" />
            <meta property="og:description" content="Makoto. - Logos, Banners, Websites. Become recognizable with a beautiful website and logo design." />
            <meta property="og:image" content="https://i.imgur.com/waTdVPy.png" />

            <meta property="twitter:card" content="summary_large_image /" />
            <meta property="twitter:url" content="https://www.makoto.pl/" />
            <meta property="twitter:title" content="Makoto. - Logos, Banners, Websites" />
            <meta property="twitter:description" content="Makoto. - Logos, Banners, Websites. Become recognizable with a beautiful website and logo design." />
            <meta property="twitter:image" content="https://i.imgur.com/waTdVPy.png" />
          </Helmet>

            <NavBar />

            <div className="pt-16">
              <Hero desc={''} header={"All articles"} />
            </div>

            <div className="container my-32 pb-16 mx-auto">

              <div className="flex flex-wrap justify-center">
                {articles.map(({node}) => {
                    return (
                        <div key={node.slug} className="w-96 h-96 m-8 overflow-hidden rounded-3xl shadow-2xl">
                          <a href={`https://makoto.pl/${node.slug}`}>
                            <Img fluid={node.img.fluid} alt="" className="w-96 h-44"/>
                            <p className="py-4 text-xl font-semibold text-gray-800 px-8">{node.title}</p>
                            <div className="text-gray-700 px-8">{node.contentNode.childMarkdownRemark.excerpt}</div>
                          </a>
                        </div>
                    )
                })}
              </div>
              

            </div>


            <Foter />

            
        </div>
    )
}

export const query = graphql`
query {
    allDatoCmsArticle {
      edges {
        node {
          title
          slug
          img {
            fluid {
                ...GatsbyDatoCmsFluid
            }
          }
          contentNode {
            childMarkdownRemark {
              excerpt(pruneLength: 100)
            }
          }
        }
      }
    }
  }  
`

export default Blog;