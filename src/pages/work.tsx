import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import Gallery from "../components/gallery/gallery";

class Work extends Component {

    render(){
        return (
            <div className="page" id="work-page">
                <Gallery></Gallery>
            </div>
        )
    }
}
export default Work