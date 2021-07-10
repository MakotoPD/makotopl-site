import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet";
import Img from "gatsby-image"


import NavBar from "../components/navbar"
import Hero from "../components/hero"
import Foter from "../components/footer"
import Newsletter from "../components/newsletter";


const IndexPage = ({ data }) => {
  const articles = data.allDatoCmsArticle.edges
  

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Makoto.</title>
        
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
        <div className="h-auto py-16">

          <Hero desc={'- Good design is the future'} header={'Makoto'} />

          <div className="block sm:flex justify-center w-2/3 xl:w-1/2 container mt-16 sm:mt-0 mx-auto py-4 bg-white rounded-3xl transform sm:-translate-y-1/2 shadow-2xl">
            <div className="sm:w-1/2 px-4 py-2">
              <h2 className="px-8 text-2xl font-semibold">Websites</h2>
              <p className="mt-4 text-gray-800">
                I have been creating websites for 4 years. I create them currently in nuxtjs and gatsbyjs. I try my best to make each website look very good.   
              </p>
            </div>
            <div className="sm:w-1/2 px-4 py-2">
              <h2 className="px-8 text-2xl font-semibold">Graphics</h2>
              <p className="mt-4 text-gray-800">
                I have been working in graphic design for 5 years. I create in programs from Adobe. I feel best in minimalistic style.
              </p>
            </div>
          </div>

        </div>


        <div className="block xl:flex container mx-auto xl:items-center pt-24 pb-4 xl:py-36">

          <div className="xl:flex-1 pl-4 sm:pl-8">
            <h4 className="sm:p-8 text-blue-500 text-xl font-semibold">- be modern</h4>
            <h2 className="pb-8 text-4xl font-extrabold text-gray-800">I can take your buisness<br /> to the next level</h2>
            <p className="text-lg">
              With a well-developed marketing plan and the right logo, <br />
              you can reach a much wider audience. <br />
              <span className="bg-gray-400 px-1 rounded-md">
                Let them remember you from the good side. 
              </span>
            </p>
          </div>

          <div className="xl:flex-1 mt-12 md:mt-64 xl:mt-0 relative">
  
              <div className="flex flex-wrap md:flex-nowrap justify-center">

                <div className="w-72 sm:w-56 md:w-auto p-8 relative">
                  <StaticImage src={'../images/uxui.png'} alt="" className="w-2/3"/>
                  <h3 className="font-semibold text-xl py-2">UX/UI design</h3>
                  <p>
                    With a well-designed website you can count on high profits and access to customers
                  </p>
                </div>

                <div className="w-72 sm:w-56 md:w-auto p-8 relative md:bottom-44">
                  <StaticImage src={'../images/logo.png'} alt="" className="w-2/3"/>
                  <h3 className="font-semibold text-xl py-2">Logo design</h3>
                  <p>
                    The logo is the most important, because it is what customers see and what they most associate with.
                  </p>
                </div>

                <div className="w-72 sm:w-56 md:w-auto p-8 relative md:top-44">
                  <StaticImage src={'../images/marketing.png'} alt="" className="w-2/3"/>
                  <h3 className="font-semibold text-xl py-2">Social Media</h3>
                  <p>
                    A lot can be achieved with well designed social media images.
                  </p>
                </div>
                  
              </div>
          </div>
        </div>


        <div className="sectionPortfolio container mx-auto px-4 sm:px-0 py-44">
          <div className="relative h-full w-full portfolioBg rounded-3xl">

            <div className="text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="text-4xl font-semibold text-white mb-16">Check out my logos portfolio</h2>

              <Link to="/portfolio">
                <button className="py-2 px-12 rounded-xl bg-gray-300 bg-opacity-60 backdrop-filter backdrop-blur-lg font-semibold text-gray-800 shad">Check it</button>
              </Link>
              
            </div>
          </div>
        </div>


        <div className="container mx-auto">
          <div>
            <div className=" sm:h-64 pl-4 sm:pl-8 mb-8">
              <h4 className="sm:p-8 text-blue-500 text-xl font-semibold">
                - Look at the news
              </h4>
              <h2 className="pb-8 text-4xl font-extrabold text-gray-800">
                Check out my blog
              </h2>
              <p className=" text-lg md:w-1/2">
              If I've piqued your interest, you can take a look at my blog. Below you will find 4 suggested articles.
              You can also subscribe to the newsletter. Don't worry. I won't send spam. 
              </p>
            </div>

            <div className="overflow-x-auto somePosts">
                {articles.map(({node}) => {
                    return (
                        <div key={node.slug} className="inline-block w-96 h-96 mx-8 overflow-hidden rounded-3xl shadow-xl">
                          <a href={node.slug}>
                            <Img fluid={node.img.fluid} alt="" className="w-96 h-44"/>
                            <p className="py-4 text-xl font-semibold text-gray-800 px-8">{node.title}</p>
                            <div className="text-gray-700 px-8 wrap">{node.contentNode.childMarkdownRemark.excerpt}</div>
                          </a>
                        </div>
                    )
                })}
            </div>


            <Newsletter/>

          </div>


        </div>

        <div className="container mx-auto">
          <div className="sm:h-44 pl-4 sm:pl-16">
            <h4 className="sm:p-8 text-blue-500 text-xl font-semibold">
              - Trust
            </h4>
            <h2 className="pb-8 text-4xl font-extrabold text-gray-800">
              Companies who trust me
            </h2>
            <p className="text-lg md:w-1/2">
              Companies to which I have created a website 
            </p>
          </div>

          <div className="flex flex-wrap w-full min-h-56 mb-16 items-center justify-center">
            <div className="w-96 p-16">
              <a href="https://radec24.pl" target="_blank" rel="noreferrer">
                <StaticImage src={'../images/websites/radec24.png'} alt="" className="filter grayscale someWebs"/>
              </a>
            </div>
            <div className="w-96 p-16">
              <a href="https://pola-rem.pl" target="_blank" rel="noreferrer">
              <StaticImage src={'../images/websites/polarem.png'} alt="" className="filter grayscale someWebs"/>
              </a>
            </div>
            <div className="w-96 p-16">
              <a href="https://frbslusarczyk.pl" target="_blank" rel="noreferrer">
              <StaticImage src={'../images/websites/frbslusarczyk.png'} alt="" className="filter grayscale someWebs"/>
              </a>
            </div>
            <div className="w-96 p-16">
              <a href="https://frbslusarczyk.pl" target="_blank" rel="noreferrer">
              <StaticImage src={'../images/websites/osusz.png'} alt="" className="filter grayscale someWebs"/>
              </a>
            </div>
          </div>

        </div>

        <Foter />

    </main>
  )
}


export const query = graphql`
query {
    allDatoCmsArticle(limit: 4) {
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


export default IndexPage
