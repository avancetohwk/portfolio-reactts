import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import './about.scss';
import Portrait from '../assets/portrait.png'
import PortraitSit from '../assets/portrait-sit.png';

class About extends Component<RouteComponentProps> {

    render(){
        return (
            <div className="page" id="about-page">
                <div className="card">
                    <div id="portrait-container">
                        <img className="screen-lg" src={Portrait}></img>
                        <img className="screen-sm" src={PortraitSit}></img>
                    </div>
                    
                    
                    <div className="inner-card">
                        <div id="text-container">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ligula magna. Nullam in faucibus leo. Cras ac fermentum felis. Donec ornare sodales leo ut consequat. Proin nec convallis leo. In mi nisl, placerat eu tempus sit amet, pulvinar at sapien. Donec at enim eu nisl fermentum congue. Vestibulum bibendum maximus volutpat. Suspendisse potenti. Duis semper dui ac commodo vehicula. Pellentesque dui diam, ornare ac tortor et, accumsan dictum neque. Quisque gravida sem sit amet vehicula maximus. Fusce non ante eu sapien viverra rutrum a ac nisl. Aliquam aliquam turpis at ultricies bibendum. Sed eleifend libero eu congue euismod. Aenean eget leo fermentum, feugiat ex at, imperdiet felis.
                                <br/>
                                <br/>
                                In hendrerit aliquam massa nec fermentum. Curabitur suscipit augue at elementum laoreet. Integer interdum, eros ac molestie feugiat, eros odio ultricies dui, nec blandit nibh urna in neque. Quisque fermentum purus ex, id fringilla sapien gravida fermentum. Nullam arcu mauris, posuere non pellentesque in, tempor id nunc. Sed a elementum justo. Nam facilisis pharetra sem eu vulputate. Cras elementum mattis sapien. Cras commodo lorem tristique, bibendum metus id, pulvinar sapien. Aliquam bibendum euismod volutpat. Donec convallis diam quis risus feugiat condimentum. Donec tempor interdum ex quis lacinia. Nullam et volutpat magna, vel venenatis orci. Vestibulum convallis quam in mi faucibus porta.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default About