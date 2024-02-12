import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const animeData = [
  {
    name: "Naruto",
    genres: ["action", "adventure", "comedy", "drama", "shounen"],
    price: 6,
    photoName: "poster/naruto.jpg",
    rating: 7,
  },
  {
    name: "One Piece",
    genres: ["action", "adventure", "comedy", "drama", "shounen"],
    price: 10,
    photoName: "poster/onepiece.jpg",
    rating: 5,
  },
  {
    name: "Bleach",
    genres: ["action", "adventure", "comedy", "shounen"],
    price: 2,
    photoName: "poster/bleach.jpg",
    rating: false,
  },
  {
    name: "Baki",
    genres: ["action", "adventure", "shounen"],
    price: 8,
    photoName: "poster/baki.jpg",
    rating: false,
  },
  {
    name: "One Punch Man",
    genres: ["action", "adventure", "comedy"],
    price: 7.6,
    photoName: "poster/onepunchman.jpg",
    rating: false,
  },
  {
    name: "Dragon Ball",
    genres: ["action", "adventure", "comedy", "shounen"],
    price: 7.5,
    photoName: "poster/dragonball.jpeg",
    rating: false,
  },
  {
    name: "Death Note",
    genres: ["drama", "mystery", "psychological", "thriller"],
    price: 8,
    photoName: "poster/deathnote.jpg",
    rating: false,
  },
  {
    name: "Code Geass",
    genres: ["action", "mystery", "psychological", "thriller"],
    price: 9.8,
    photoName: "poster/codegeass.jpg",
    rating: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
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
        <>
          <ul className="animes">
            {/* here we iterate each data on an object and used the data as props to render components for each data */}
            {animeData.map((anime) => (
              <Anime animeObj={anime} key={anime.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our anime list. Please come back later</p>
      )}
    </main>
  );
}

function Anime({ animeObj }) {
  return (
    // setting classes conditionally using ternary operation and template literals
    <li className={`anime`}>
      <img src={animeObj.photoName} alt={animeObj.name} />
      <div>
        <h3>{animeObj.name}</h3>
        <p>
          {animeObj.genres.map((genre) => (
            <p className="genre">{genre}</p>
          ))}
        </p>
        {/* <span>{animeObj.rating ? "Sold Out" : animeObj.price}</span> */}
      </div>
    </li>
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
