import React, { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";
import Menu from "./Menu";
import Header from "./Header";

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

export default function App() {
  const [showForm, setShowForm] = useState(false);

  function handleToggleForm(showForm) {
    setShowForm((showForm) => !showForm);
  }

  const [animeList, setAnimeList] = useState(animeData);

  function handleSetAnimeList(animeList) {
    setAnimeList((animeList) => !animeList);
  }

  return (
    <div className="container">
      <Header />
      {showForm ? <Form /> : <Menu animeList={animeList} />}
      <Footer onToggleForm={handleToggleForm} showForm={showForm} />
    </div>
  );
}
