import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


export default function Hero( {header, desc} ) {
    return (
        <div className="w-screen h-auto">
            <div className="w-10/12 mx-auto overflow-hidden rounded-3xl relative hero">
                <div className="absolute top-1/2 transform -translate-y-2/3 z-20 px-8 md:px-28">
                    <p className="text-xl sm:text-2xl text-white">{desc}</p>
                    <h1 className="text-4xl sm:text-8xl font-bold text-white">{header}</h1>
                </div>
                
                <StaticImage alt="" src={'../images/bg2.jpg'} className="absolute left-0 top-0 w-full h-full z-0"/>
            </div>
        </div>
    )
}