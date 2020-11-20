import React from 'react'
import "./aim.css"
import fireworks from "../undraw_fireworks_q5ji.svg"
import agree from '../undraw_agreement_aajr.svg'
import bitcoin from '../undraw_bitcoin2_ave7.svg'

export default function aim() {
    return (
        <div>
            <div className="aim__stuffs">
                <div className="aims">
                    <img className="fire__img" src={fireworks} alt="fire"/>
                    <h3 className="text-center">We Partner with the Hottest Book Companies</h3>
                    <p className="text-center">We're talking Evernote,Mailchimp, Depositphotos just to name a few.</p>
                </div>
                <div className="aims">
                    <img className="fire__img" src={agree} alt="fire"/>
                    <h3 className="text-center">We Run Deals on their Products</h3>
                    <p className="text-center">But don't sleep on ot! Our deals sell out within a couples of weeks</p>
                </div>
                <div className="aims">
                    <img className="fire__img" src={bitcoin} alt="fire"/>
                    <h3 className="text-center">You save thousands of dollars</h3>
                    <p className="text-center">And build up a full arsenal of tools to grow your business</p>
                </div>
            </div>
        </div>
    )
}
