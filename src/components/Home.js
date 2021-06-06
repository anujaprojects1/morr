import React, { Component } from 'react'
import shutterImage from '../images/104-1047791_action-clipart-video-production-graphic-design-removebg-preview.png'
import {Link} from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div>
                <header>
                    <p className="popular">Popular Titles</p>
                </header>
                <div className="titles">
                    <Link to="/Series" exact>
                        <div className="tile">
                            <div className="box">
                                <img src={shutterImage} alt="image1" />
                                <p>SERIES</p>
                            </div>
                            <p className="tileP">Popular Series</p>
                        </div>
                    </Link>
                    <Link to="/Movies" exact>
                        <div className="tile">
                            <div className="box">
                                <img src={shutterImage} alt="image2" />
                                <p>MOVIES</p>
                            </div>
                            <p className="tileP">Popular Movies</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
