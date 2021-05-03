import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


export default function Foter() {
    return (
        <footer className="w-screen h-screen relative bg-blue-900">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <StaticImage src={'../images/logoWhite.png'} alt=""/>
                <p className="text-white">
                    © 2021. Patryk Dąbrowski. All rights reserved
                </p>
            </div>

            <div className=" absolute left-1/2 bottom-16 transform -translate-x-1/2">
                <Link to="/privacy" className="text-white underline">Privacy policy</Link>
            </div>
        </footer>
    )
}

