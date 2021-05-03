import React, { Component } from "react"
import { Link } from "gatsby"
import classNames from 'classnames';


import logoBlack from "../images/logoBlack.png"
import hamburger from '../images/hamburger.svg'
import arrow from '../images/arrow.svg'



class NavBar extends Component {


    state = {
        isActive: false
      };
    
    handleClick = () => {
        this.setState(state => ({ isActive: !state.isActive }));
    };

    render() {

        const menuClass = classNames({
            'fixed md:hidden top-0 left-full w-screen h-screen bg-white z-50': true,
            active: this.state.isActive
        });


        return (
            <div>
                <div className={menuClass}>
                    <button onClick={this.handleClick} className="w-12 absolute right-8 top-8">
                        <img src={arrow} alt=""/>
                    </button>

                    <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">
                        <Link to="/" activeClassName="activePage" className="block my-4 navbarLink text-black font-semibold">Home</Link>
                        <Link to="/portfolio" activeClassName="activePage" className="block my-4 navbarLink text-black font-semibold">Portfolio</Link>
                        <Link to="/blog" activeClassName="activePage" className="block my-4 navbarLink text-black font-semibold">Blog</Link>
                    </div>
                    

                    <div className="absolute left-1/2 bottom-16 transform -translate-x-1/2">
                        <div className="flex justify-center">
                            <a href="https://twitter.com/makotoPL" target="_blank" rel="noreferrer">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="#000"
                                    height="1.7em"
                                    width="1.7em"
                                >
                                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 005.001-1.721 4.036 4.036 0 01-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 01-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 01-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 008.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 014.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 002.556-.973 4.02 4.02 0 01-1.771 2.22 8.073 8.073 0 002.319-.624 8.645 8.645 0 01-2.019 2.083z" />
                                </svg>
                            </a>
                            

                            <a href="https://m.me/MakotoPL" target="_blank" rel="noreferrer">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="#000"
                                    height="1.7em"
                                    width="1.7em"
                                >
                                    <path d="M12 3c-4.92 0-8.91 3.729-8.91 8.332 0 2.616 1.291 4.952 3.311 6.479V21l3.041-1.687c.811.228 1.668.35 2.559.35 4.92 0 8.91-3.73 8.91-8.331C20.91 6.729 16.92 3 12 3zm.938 11.172l-2.305-2.394-4.438 2.454 4.865-5.163 2.305 2.395 4.439-2.455-4.866 5.163z" />
                                </svg>
                            </a>
                            

                            <a href="https://instagram.com/MakotoPL" target="_blank" rel="noreferrer">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="#000"
                                    height="1.7em"
                                    width="1.7em"
                                >
                                    <path d="M20.947 8.305a6.53 6.53 0 00-.419-2.216 4.61 4.61 0 00-2.633-2.633 6.606 6.606 0 00-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 00-2.185.42 4.607 4.607 0 00-2.633 2.633 6.554 6.554 0 00-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 002.634 2.632 6.584 6.584 0 002.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 002.186-.419 4.615 4.615 0 002.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 010 9.246zm4.807-8.339c-.597 0-1.078-.482-1.078-1.078a1.077 1.077 0 112.155 0c0 .596-.482 1.078-1.077 1.078z" />
                                    <path d="M14.997 11.979 A3.003 3.003 0 0 1 11.994 14.982 A3.003 3.003 0 0 1 8.991 11.979 A3.003 3.003 0 0 1 14.997 11.979 z" />
                                </svg>
                            </a>


                            <a href="https://facebook.com/MakotoPL" target="_blank" rel="noreferrer">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="#000"
                                    height="1.7em"
                                    width="1.7em"
                                >
                                    <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
                                </svg>
                            </a>
                            

                            <a href="https://github.com/MakotoPD" target="_blank" rel="noreferrer">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="#000"
                                    height="1.7em"
                                    width="1.7em"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 012.496-.336 9.554 9.554 0 012.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            

                        </div>



                    </div>
                </div>
                    







                <nav className="flex w-screen h-24 px-8 sm:px-16 items-center justify-center">
                    <div className="flex-1">
                        <Link to="/">
                            <img src={logoBlack} alt="Makoto." className="w-64" />
                        </Link>
                    </div>
                    
                    <div className="hidden md:block flex-1 text-center text-xl">
                        <Link to="/" activeClassName="activePage" className="navbarLink px-4 text-black font-semibold">Home</Link>
                        <Link to="/portfolio" activeClassName="activePage" className="navbarLink px-4 text-black font-semibold">Portfolio</Link>
                        <Link to="/blog" activeClassName="activePage" className="navbarLink px-4 text-black font-semibold">Blog</Link>
                    </div>

                    <div className="hidden flex-1 md:flex justify-end">
                        <a href="https://twitter.com/makotoPL" target="_blank" rel="noreferrer">
                            <svg
                                viewBox="0 0 24 24"
                                fill="#000"
                                height="1.7em"
                                width="1.7em"
                            >
                                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 005.001-1.721 4.036 4.036 0 01-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 01-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 01-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 008.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 014.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 002.556-.973 4.02 4.02 0 01-1.771 2.22 8.073 8.073 0 002.319-.624 8.645 8.645 0 01-2.019 2.083z" />
                            </svg>
                        </a>
                        

                        <a href="https://m.me/MakotoPL" target="_blank" rel="noreferrer">
                            <svg
                                viewBox="0 0 24 24"
                                fill="#000"
                                height="1.7em"
                                width="1.7em"
                            >
                                <path d="M12 3c-4.92 0-8.91 3.729-8.91 8.332 0 2.616 1.291 4.952 3.311 6.479V21l3.041-1.687c.811.228 1.668.35 2.559.35 4.92 0 8.91-3.73 8.91-8.331C20.91 6.729 16.92 3 12 3zm.938 11.172l-2.305-2.394-4.438 2.454 4.865-5.163 2.305 2.395 4.439-2.455-4.866 5.163z" />
                            </svg>
                        </a>
                        

                        <a href="https://instagram.com/MakotoPL" target="_blank" rel="noreferrer">
                            <svg
                                viewBox="0 0 24 24"
                                fill="#000"
                                height="1.7em"
                                width="1.7em"
                            >
                                <path d="M20.947 8.305a6.53 6.53 0 00-.419-2.216 4.61 4.61 0 00-2.633-2.633 6.606 6.606 0 00-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 00-2.185.42 4.607 4.607 0 00-2.633 2.633 6.554 6.554 0 00-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 002.634 2.632 6.584 6.584 0 002.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 002.186-.419 4.615 4.615 0 002.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 010 9.246zm4.807-8.339c-.597 0-1.078-.482-1.078-1.078a1.077 1.077 0 112.155 0c0 .596-.482 1.078-1.077 1.078z" />
                                <path d="M14.997 11.979 A3.003 3.003 0 0 1 11.994 14.982 A3.003 3.003 0 0 1 8.991 11.979 A3.003 3.003 0 0 1 14.997 11.979 z" />
                            </svg>
                        </a>


                        <a href="https://facebook.com/MakotoPL" target="_blank" rel="noreferrer">
                            <svg
                                viewBox="0 0 24 24"
                                fill="#000"
                                height="1.7em"
                                width="1.7em"
                            >
                                <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
                            </svg>
                        </a>
                        

                        <a href="https://github.com/MakotoPD" target="_blank" rel="noreferrer">
                            <svg
                                viewBox="0 0 24 24"
                                fill="#000"
                                height="1.7em"
                                width="1.7em"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 012.496-.336 9.554 9.554 0 012.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        

                    </div>


                    <div className="block md:hidden flex-1 text-right pt-4">
                        <button id="nav-toggle" onClick={this.handleClick} className="w-12 h-12">
                            <img src={hamburger} alt="" className="w-16" />
                        </button>
                    </div>

                    

                </nav>
            </div>
            
        )

    }

}

export default NavBar;