import * as React from "react"
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet";
import Img from "gatsby-image"

import NavBar from "../components/navbar"

import '../scss/article.scss'

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

const Article = ({ pageContext: { slug }, data: { article }}) => {

    

    return (

        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Makoto. - {article.title}</title>
                <link rel="shortcut icon" href={'./favicon.png'} type="image/x-icon"/>
                <meta name="description" content="Makoto. - Logos, Banners, Websites." />
                <meta property="og:type" content="website" />

                <meta property="og:url" content={`${article.img.fluid}`} />
                <meta property="og:title" content="Makoto. - Logos, Banners, Websites" />
                <meta property="og:description" content="Makoto. - Logos, Banners, Websites." />
                <meta property="og:image" content={`${article.img.fluid}`} />

                <meta property="twitter:card" content="summary_large_image /" />
                <meta property="twitter:url" content="https://www.makoto.pl/" />
                <meta property="twitter:title" content="Makoto. - Logos, Banners, Websites" />
                <meta property="twitter:description" content="Makoto. - Logos, Banners, Websites." />
                <meta property="twitter:image" content={`${article.img.fluid}`} />
            </Helmet>
            <NavBar />

            <div className="container mx-auto">
                <div className="sm:h-96 rounded-3xl overflow-hidden relative shadow-2xl"> 
                    <Img fluid={article.img.fluid} className="transform lg:-translate-y-1/3" />
                </div>
                
                <div className="hideImage shadow-2xl reative">
                    <h1 className="pb-12 text-4xl font-semibold text-gray-800">{article.title}</h1>
                    <div className="content" dangerouslySetInnerHTML={{
                    __html: article.contentNode.childMarkdownRemark.html,
                    }}/>

                    <h5 className="absolute right-12 bottom-8">{article.meta.createdAt}</h5>
                </div>
            </div>
            
        </div>
        
    )
}


export const query = graphql`
    query fetchArticle($slug: String) {
        article: datoCmsArticle(slug: { eq: $slug }) {
            id,
            title
            slug
            meta {
                createdAt(formatString: "DD MMMM YYYY")
            }
            img {
                fluid {
                    ...GatsbyDatoCmsFluid
                }
            }
            tags {
                name
            }
            content
            contentNode {
                childMarkdownRemark {
                  excerpt(pruneLength: 100)
                  html
                }
            }
            
        }
    }
`

export default Article;