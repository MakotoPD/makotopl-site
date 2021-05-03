import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet";


const NotFoundPage = () => {
  return (
    <main className="w-screen h-screen bg-gray-800 flex items-center justify-center" >

      <Helmet>
        <meta charSet="utf-8" />
        <title>Makoto. - 404 Error</title>


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
      
      <div className="text-center">
        <h1 className="text-white text-6xl ">Page not found</h1>
        <Link to="/">
          <button className="goHome my-16 py-2 px-8 rounded-2xl bg-gray-400">
            Go home
          </button>
        </Link>
      </div>

    </main>
  )
}

export default NotFoundPage
