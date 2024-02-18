import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const animeData = [
  {
    name: "Naruto",
    genres: ["action", "adventure", "comedy", "drama", "shounen"],
    photoName: "poster/naruto.jpg",
    rating: 7,
    summary:
      "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village. Naruto Uzumaki wants to be the best ninja in the land.",
  },
  {
    name: "One Piece",
    genres: ["action", "adventure", "comedy", "drama", "shounen"],
    photoName: "poster/onepiece.jpg",
    rating: 5,
    summary:
      "The series focuses on Monkey D. Luffy—a young man made of rubber after unintentionally eating a Devil Fruit—who sets off on a journey from the East Blue Sea to find the deceased King of the Pirates Gol D. Roger's ultimate treasure known as the One Piece, and take over his prior title.",
  },
  {
    name: "Bleach",
    genres: ["action", "adventure", "comedy", "shounen"],
    photoName: "poster/bleach.jpg",
    rating: 2,
    summary:
      'High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from "Hollows". High school student Kurosaki Ichigo is unlike any ordinary kid. Why? Because he can see ghosts.',
  },
  {
    name: "Baki",
    genres: ["action", "adventure", "shounen"],
    photoName: "poster/baki.jpg",
    rating: 8,
    summary:
      "Baki Hanma strives to be the fighting equal of his legendary father, who is known as The Orge. Possessing incredible strength and combat abilities, Baki must go to extreme measures to become the equal of his old man.",
  },
  {
    name: "One Punch Man",
    genres: ["action", "adventure", "comedy"],
    photoName: "poster/onepunchman.jpg",
    rating: 7.6,
    summary:
      "It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge.",
  },
  {
    name: "Dragon Ball",
    genres: ["action", "adventure", "comedy", "shounen"],
    photoName: "poster/dragonball.jpeg",
    rating: 7.5,
    summary:
      "Dragon Ball tells the tale of a young warrior by the name of Son Goku, a young peculiar boy with a tail who embarks on a quest to become stronger and learns of the Dragon Balls, when, once all 7 are gathered, grant any wish of choice.",
  },
  {
    name: "Death Note",
    genres: ["drama", "mystery", "psychological", "thriller"],
    photoName: "poster/deathnote.jpg",
    rating: 4.2,
    summary:
      "The story follows Light Yagami, a genius high school student who discovers a mysterious notebook: the Death Note, which belonged to the shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages.",
  },
  {
    name: "Code Geass",
    genres: ["action", "mystery", "psychological", "thriller"],
    photoName: "poster/codegeass.jpg",
    rating: 9.8,
    summary:
      "Set in an alternate timeline, it follows the exiled prince Lelouch Lamperouge, who obtains the power of absolute obedience from a mysterious woman named C.C. Using this supernatural power, known as Geass, he leads a rebellion against the rule of the Holy Britannian Empire, commanding a series of mecha battles.",
  },
];

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="container">
      <Header />
      {menu ? <Menu /> : <Form />}
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Animix</h1>
    </header>
  );
}

function Menu() {
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

function Anime({ animeObj }) {
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

function Rating({ rating }) {
  return (
    <span
      className={`${rating <= 2.5 && "very-bad"}
                    ${rating <= 5 && rating >= 2.6 && "bad"}
                    ${rating <= 7.5 && rating >= 5.1 && "good"}
                    ${rating <= 10 && rating >= 7.6 && "very-good"}`}
    >
      {rating <= 2.5 && "Very-bad"}
      {rating <= 5 && rating >= 2.6 && "Bad"}
      {rating <= 7.5 && rating >= 5.1 && "Good"}
      {rating <= 10 && rating >= 7.6 && "Very-good"}
    </span>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const openingHour = 8;
  const closingHour = 17;
  let status = "";

  currentHour >= openingHour && currentHour < closingHour
    ? (status = "open")
    : (status = "close");

  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().toLocaleDateString()}. We're currently {status}!
        </p>
        <button className="btn">Watch Anime</button>
      </div>
    </footer>
  );
}

function Form() {
  return (
    <main>
      <p>form</p>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
