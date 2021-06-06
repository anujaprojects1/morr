import React, { Component } from 'react'

export default class Error extends Component {
    render() {
        return (
            <div>
                <header>
                    <p className="popular">Popular Titles</p>
                </header>
                <p className="errorMsg">Oops, Something Went Wrong..</p>
            </div>
        )
    }
}
