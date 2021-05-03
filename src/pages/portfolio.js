import * as React from "react"
import {Helmet} from "react-helmet";
import { StaticImage } from "gatsby-plugin-image"
import Zoom from 'react-medium-image-zoom'

import NavBar from "../components/navbar"
import Hero from "../components/hero"
import Foter from "../components/footer"

import 'react-medium-image-zoom/dist/styles.css'


const PortfolioPage = () => {





    return (
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Makoto. - Portfolio</title>

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
  
        <div>
          <NavBar />
          <div className="pt-16">
            <Hero desc={''} header={"Portfolio"} />
          </div>

          <div className="container mx-auto pb-16">
            <h2 className="pt-32 pb-8 text-4xl font-semibold text-gray-800">
              Logos that I have created
            </h2>
            <div className="lg:flex lg:flex-wrap">

              <Zoom>
                  <StaticImage src={'../images/portfolio/1.jpg'} className="w-full rounded-3xl sm:w-96 m-12 shadow-2xl" alt=""/>
              </Zoom>
              <Zoom>
                  <StaticImage src={'../images/portfolio/2.jpg'} className="w-full rounded-3xl sm:w-96 m-12 shadow-2xl" alt=""/>
              </Zoom>
              <Zoom>
                  <StaticImage src={'../images/portfolio/3.jpg'} className="w-full rounded-3xl sm:w-96 m-12 shadow-2xl" alt=""/>
              </Zoom>
              <Zoom>
                  <StaticImage src={'../images/portfolio/4.jpg'} className="w-full rounded-3xl sm:w-96 m-12 shadow-2xl" alt=""/>
              </Zoom>
              <Zoom>
                  <StaticImage src={'../images/portfolio/5.jpg'} className="w-full rounded-3xl sm:w-96 m-12 shadow-2xl" alt=""/>
              </Zoom>
              <Zoom>
                  <StaticImage src={'../images/portfolio/6.jpg'} className="w-full rounded-3xl sm:w-96 m-12 shadow-2xl" alt=""/>
              </Zoom>
              <Zoom>
                  <StaticImage src={'../images/portfolio/7.jpg'} className="w-full rounded-3xl sm:w-96 m-12 shadow-2xl" alt=""/>
              </Zoom>
              <Zoom>
                  <StaticImage src={'../images/portfolio/8.jpg'} className="w-full rounded-3xl sm:w-96 m-12 shadow-2xl" alt=""/>
              </Zoom>
              
            </div>
          </div>
        </div>
        <Foter />
      </main>
    )
  }
  
  export default PortfolioPage
  