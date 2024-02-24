import React from "react";
import { Rating } from "./Rating";

export default function Anime({ animeObj }) {
  return (
    // setting classes conditionally using ternary operation and template literals
    <>
      <img src={animeObj.photoName} alt={animeObj.name} />
      <div>
        <h3>{animeObj.name}</h3>
        <p>
          {animeObj.genres.map((genre, index) => (
            <span className="genre" key={index}>
              {genre}
            </span>
          ))}
        </p>
        <span>
          Rating: {animeObj.rating} <Rating rating={animeObj.rating} />
        </span>
      </div>
    </>
  );
}
