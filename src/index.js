import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const animeData = [
  {
    name: "Naruto",
    genres: ["action", "adventure", "comedy", "drama", "shounen"],
    price: 6,
    photoName: "poster/naruto.jpg",
    soldOut: false,
  },
  {
    name: "One Piece",
    genres: ["action", "adventure", "comedy", "drama", "shounen"],
    price: 10,
    photoName: "poster/onepiece.jpg",
    soldOut: false,
  },
  {
    name: "Bleach",
    genres: ["action", "adventure", "comedy", "shounen"],
    price: 12,
    photoName: "poster/bleach.jpg",
    soldOut: false,
  },
  {
    name: "Baki",
    genres: ["action", "adventure", "shounen"],
    price: 12,
    photoName: "poster/baki.jpg",
    soldOut: false,
  },
  {
    name: "One Punch Man",
    genres: ["action", "adventure", "comedy"],
    price: 15,
    photoName: "poster/onepunchman.jpg",
    soldOut: false,
  },
  {
    name: "Dragon Ball",
    genres: ["action", "adventure", "comedy", "shounen"],
    price: 18,
    photoName: "poster/dragonball.jpeg",
    soldOut: false,
  },
  {
    name: "Death Note",
    genres: ["drama", "mystery", "psychological", "thriller"],
    price: 18,
    photoName: "poster/deathnote.jpg",
    soldOut: false,
  },
  {
    name: "Code Geass",
    genres: ["action", "mystery", "psychological", "thriller"],
    price: 18,
    photoName: "poster/codegeass.jpg",
    soldOut: false,
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

// we use jsx syntax to input some html and css inside js file and inside this js function
// this jsx will be automatically converted into pure html and css using babel which is default on react
// jsx simplifies making react components but if we want we can use pure js to generate a component
function Header() {
  return (
    <header className="header">
      <h1>Animix</h1>
    </header>
  );
}

function Menu() {
  const pizzas = animeData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <div className="menu-title">
        <h2>Best Anime List</h2>
        <p>
          Updated list of all popular anime with honest review and ratings from
          all otaku world-wide.
        </p>
      </div>
      {numPizzas > 0 ? (
        // here we use react fragment. this serves as main element on jsx so that we can render multiple element
        // the fragment will not actually render on html it only handles the group of elements but does not affect the entire design
        <>
          <ul className="pizzas">
            {/* here we iterate each data on an object and used the data as props to render components for each data */}
            {animeData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
}

// by destructuring props you can easily determine all the data that has been passed on component
// in destructuring props the name of data that is being passed on component and the name of parameter here on component must be same
// the name of data on destructured props must be inside {}
function Pizza({ pizzaObj }) {
  return (
    // setting classes conditionally using ternary operation and template literals
    <li className={`pizza ${pizzaObj.soldOut && "sold-out"}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.genres.map((genre) => genre)}</p>
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  // this is a sample in making a certain html element to render using only pure js without jsx
  // return React.createElement("footer", null, "We're currently open!");

  const currentHour = new Date().getHours();
  const openingHour = 8;
  const closingHour = 17;
  let status = "";

  // you can add/make/call any logical operations inside components because its just like a normal js function
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
