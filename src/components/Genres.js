import React from 'react';
import Genre from './Genre';

var genres=[
    "Fantasy",
    "Mystery",
    "Sci-Fi",
    "Romance",
    "Video Games",
    "Martial Arts",
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Harem",
    "Xinxia",
    "Psychological",
    "Supernatural",
    "Shounen",
    "Ecchi",
    "Josei",
    "Mecha",
    "Tragedy",
    "Mature",
    "Slice Of Life",
    "Horror"
];

export default function Genres(){
    return(
    <div className='novel_genres'>
        <div style={{ display: "flex", justifyContent: "space-evenly",marginTop: "30px"}}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" ,width: "50%"}}>
            {genres.map((genre, index) => <Genre key={index} genre={genre} />)}
        </div>
        </div>
    </div>
    );
}