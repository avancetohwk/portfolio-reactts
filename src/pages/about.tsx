import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import './about.scss';
import Portrait from '../assets/portrait.png'
import PortraitSit from '../assets/portrait-sit.png';
import SkillsChart from "../components/skillschart/skillschart";

class About extends Component<RouteComponentProps> {

    componentDidUpdate(){
        // //Pure JavaScript DOM
        // var el = document.getElementById("adobe") as HTMLElement;
        // console.log(el)
        // el.style.width = "20%";

        // el = document.getElementById("html") as HTMLElement;
        // el.style.width = "40%";
    }

    render(){
        return (
            <div className="page" id="about-page">
                <div className="card">
                    <div id="portrait-container">
                        <img className="screen-lg" src={Portrait}></img>
                        <img className="screen-md" src={PortraitSit}></img>
                    </div>
                    
                    
                    <div className="inner-card drawn-border">
                        <div className="inner-card-content">
                            <div id="text-container">
                                <h1>About Me</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ligula magna. Nullam in faucibus leo. Cras ac fermentum felis. Donec ornare sodales leo ut consequat. Proin nec convallis leo. In mi nisl, placerat eu tempus sit amet, pulvinar at sapien. Donec at enim eu nisl fermentum congue. Vestibulum bibendum maximus volutpat. Suspendisse potenti. Duis semper dui ac commodo vehicula. Pellentesque dui diam, ornare ac tortor et, accumsan dictum neque. Quisque gravida sem sit amet vehicula maximus. Fusce non ante eu sapien viverra rutrum a ac nisl. Aliquam aliquam turpis at ultricies bibendum. Sed eleifend libero eu congue euismod. Aenean eget leo fermentum, feugiat ex at, imperdiet felis.
                                </p>
                            </div>
                            <div id="skills-container" >
                                <h1>Skills</h1>
                                <SkillsChart></SkillsChart>
                                


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About