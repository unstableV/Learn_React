import React from "react";

export default function Card(prop) {
    
    return (
        <div>
           {prop.item.openSpot>0 && <div>
            <h1>{prop.item.rating}</h1>
            <h1>{prop.item.brac}</h1>
            <h1>{prop.item.country}</h1>
            <p>{prop.item.dis}</p>
            </div>
           }
        </div>
    )
}