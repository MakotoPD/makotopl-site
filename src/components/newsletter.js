import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import classNames from 'classnames';

export default class Newsletter extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            email: '',
            message: 'Thanks for subscribe my newsletter! ❤️',
            sub: false
        }
    }
    
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value})
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        addToMailchimp(this.state.email, {
            FNAME: this.state.firstName
        })
        .then(({ msg, result }) => {
            console.log('msg', `${result}: ${msg}`)
      
            if (result !== 'success') {
              throw msg
            }
            this.setState(state => ({ sub: !state.sub }))
        })
        .catch((err => {
            console.log('err', err)
        }))
        this.setState({firstName: ''})
        this.setState({email: ''})
    }


    render() {

        const subClass = classNames({
            'bg-green-500 bg-opacity-60 backdrop-filter backdrop-blur-lg font-semibold w-auto lg:w-96 mx-auto py-2 px-4 mt-4 rounded-xl opacity-0 sub': true,
            'visibleSub': this.state.sub
        });

        return (
            <div>
                <div className="mt-44 mb-32 px-4 sm:px-0">
                    <div className="w-full h-96 lg:h-72 subBg rounded-3xl relative">
                        <div className="text-center absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <h2 className="text-4xl font-semibold text-white mb-8">Subscribe newsletter</h2>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" value={this.state.firstName} onChange={this.changeFirstNameHandler} placeholder="Your name" className="py-1 px-4 rounded-lg m-2" />
                                <input type="email" value={this.state.email} onChange={this.changeEmailHandler} placeholder="Your e-mail" className="py-1 px-4 rounded-lg m-2" />
                                <button type="submit" className="subBtn bg-blue-500 bg-opacity-60 backdrop-filter backdrop-blur-lg text-white py-1 px-7 rounded-lg">Subscribe</button>
                            </form>
                            <p className={subClass}>{this.state.message}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
