import React, {Component} from 'react';
import SginUp from "./SginUp";
import Siginin from "./Siginin";
import "../../src/sass/render.css"




class Render extends React.Component {


    render() {
        return (
            <div className="wrapper">
                <div className="block">
                   <Siginin/>
                </div>
            </div>


        );
    }
}

export default Render;