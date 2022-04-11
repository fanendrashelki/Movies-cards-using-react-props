import React from "react";
import './Card.css'
function Card(props) {

    return (
        <>
            <div class="card col-8 col-md-3 col-lg-3 col-xlg-4 mt-5">
                <img src={props.imgsrc} class="card-img-top" alt={props.alt} />
                <div class="card-body">
                    <h2 class="card-title">{props.title} ({props.year})</h2>
                    <div className="card-info">
                        <h4>{props.duration}</h4>
                        <h4>{props.genres}</h4>
                        <h4>{props.rating}</h4>
                    </div>
                    <p className="card-text">{props.summary}</p>
                    <a href={props.link} class="card-btn mt-5">watch Now</a>
                </div>
            </div>
        </>
    );
}
export default Card;
