import React, { useState } from "react";
import { animeData, Anime } from ".";

export function Menu() {
  const animes = animeData;
  const numAnime = animes.length;

  const [summary, setSummary] = useState("");

  return (
    <main className="menu">
      <div className="menu-title">
        <h2>Best Anime List</h2>
        <p>
          Updated list of all popular anime with honest review and ratings from
          all otaku world-wide.
        </p>
      </div>
      {numAnime > 0 ? (
        <ul className="animes">
          {/* here we iterate each data on an object and used the data as props to render components for each data */}
          {animeData.map((anime) => (
            <li
              className={`anime`}
              onClick={(e) =>
                setSummary(summary !== anime.name ? anime.name : "")
              }
            >
              {summary !== anime.name ? (
                <Anime animeObj={anime} key={anime.name} />
              ) : (
                <div>
                  <h3>Summary of {anime.name}</h3>
                  <p>{anime.summary}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>We're still working on our anime list. Please come back later</p>
      )}
    </main>
  );
}
