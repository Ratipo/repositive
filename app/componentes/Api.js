'use client'
import Api from "./Api"
import React, { useEffect, useState } from'react'
import Image from "next/image";


export default function Botones(){

        const [animes, setAnimes] = useState(null);
        const [isOpen, setIsOpen] = useState(false);

        const obtenerDatos = async () => {
            const response = await fetch("https://api.jikan.moe/v4/anime?q=naruto&sfw");
            const movies = await response.json();
            const data = movies.data;
            if (animes == undefined){
            await setAnimes([data[0], data[1], data[2], data[3]]);}
            console.log(animes);
        };
  useEffect(() => {
        obtenerDatos()    
    },[animes]); 

    return(
    <div className="contBtn">
                <div className="">
             
                    <button className="btn" id="btnAnime" onClick={() => setIsOpen(!isOpen)}>Juegos anime</button>
                </div>   
                {isOpen? <div className="animes" id="anime"> 
            {/* {animes.map((anime, index)=> {
                <Image key={index} src={anime.images.jpg.image_url} alt="anime" width={200} height={500}/>
            })} */}
            <img src={animes[0].images.jpg.image_url}/>
            <img src={animes[1].images.jpg.image_url}/>
            <img src={animes[2].images.jpg.image_url}/>
            <img src={animes[3].images.jpg.image_url}/>
            </div>: <h1></h1>}
            
            </div>
    
)
}