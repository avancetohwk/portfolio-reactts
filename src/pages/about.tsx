import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import './about.scss';
import Portrait from '../assets/portrait.png'

class About extends Component<RouteComponentProps> {

    render(){
        return (
            <div className="page" id="about-page">
                <div className="card">
                    bruh
                    <div className="inner-card">
                        {/* <img src={Portrait}></img> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default About