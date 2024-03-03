import React from "react";

export default function Form() {
  return (
    <main className="menu">
      <div className="menu-title">
        <h2>Add New Anime</h2>
        <p>
          Anyone can contribute to our community, submit a new list of anime.
        </p>
        <form>
          <input type="text" name="title" />
          <input type="text" name="genre" />
          <input type="text" name="rating" />
          <input type="text" name="summary" />
        </form>
      </div>
    </main>
  );
}
