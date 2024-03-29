import React from "react";

export default function Footer({ onToggleForm, showForm }) {
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
        <button className="btn" onClick={() => onToggleForm()}>
          {showForm ? "Main Menu" : "Add Anime"}
        </button>
      </div>
    </footer>
  );
}
