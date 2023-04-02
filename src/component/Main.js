import React from 'react';
import data from '../data';
import FinalImage from './FinalImage';

let i=0;
let isFinal =0
let final = ""
export default function Main() {
const [movieImage, setMovieImage] = React.useState("")
const [movieImage2, setMovieImage2] = React.useState("")

function getMovieImage() {
    // const randomNumber = Math.floor(Math.random()*data.length)
       if(i+1===data.length) {
        setMovieImage(data[i].Images);
        isFinal = 1
        final = movieImage
       }
       else {
        setMovieImage(data[i].Images)
        i++;
       }
}
function getMovieImage2() {
   // const randomNumber = Math.floor(Math.random()*data.length)
   if(i+1===data.length) {
    setMovieImage(data[i].Images)
    isFinal = 1
    final = movieImage2
   }
   else {
    setMovieImage2(data[i].Images)
    i++;
   }
}

return(
    <div>
    {isFinal ? <img src={final}/> :

    <div className='row'>
    <div className='Column'>
        <img src={movieImage} onClick={getMovieImage} className="image"/>
    </div>
    <div className='Column'>
        <img src={movieImage2} onClick={getMovieImage2} className="image"/>
    </div>
</div> }
</div>
)
}