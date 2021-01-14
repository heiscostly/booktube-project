import React, { Component } from 'react'
import Customer from "../undraw_book_reading_kx9s.svg"
import { Button } from '@material-ui/core';
import "./provide.css"
import CheckBoxIcon from '@material-ui/core/CheckBox';
import CheckIcon from '@material-ui/icons/Check';


export class provide extends Component {
    render() {
        return (
            <div>
                <div className="theProvides">
                    <div className="customerImage">
                        <img className="Customer-Image" src={Customer}></img>
                    </div>
                        
                    <div className="provideText">
                        <div className="heyText">
                            <h3>We Provie Many Features You Can Use</h3>
                            <p>You can explore the features that we provide with fun and have their own functions each feature</p>
                            <p><CheckIcon  variant="contained"/> Powerful Online Protection</p>
                            <p><CheckIcon fontColour="green"/> Great Books Reviews from Great Writters</p>
                            <p><CheckIcon/> Great Connection from around the globe and more</p>
                            <p><CheckIcon/> Be Open to asking question and getting great answers</p>
                            {/* <CheckIcon />    */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default provide
