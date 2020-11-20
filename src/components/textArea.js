import React from 'react'
import "./textstyle.css"
import Svg from "../undraw_book_lover_mkck.svg"

export default function textArea() {
    return (
        <div>
            <div className="text__area">
             <div>
            <h1 className="text-center" style={{color:'white', fontWeight:'bolder',}}>Book Tube</h1>
            <p style={{fontSize:"1.4rem"}}>Do you Know you could get exciting books, book reviews from amazing book readers around the globe<br/>
            We at booktube, we provide you the platform where you can get reviews and recomendations from other great readers</p>
            </div>
            <img className="reading" src={Svg}></img>
            </div> 
            
        </div>
    )
}
