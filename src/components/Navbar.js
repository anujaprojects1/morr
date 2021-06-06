import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/" exact>
                        <p className="navLogo">DEMO Streaming</p>
                    </Link>
                    <ul>
                        <li className="login">Log in</li>
                        <li className="trial">Start your free trial</li>
                    </ul>
                </nav>
            </div>
        )
    }
}
