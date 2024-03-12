import React from "react";

export default function Form() {
  return (
    <main className="menu">
      <div className="menu-title">
        <h2>Add New Anime</h2>
        <p>
          Anyone can contribute to our community, submit a new list of anime.
        </p>
      </div>
      <form>
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" />
        </div>

        <div>
          <label for="genre">Genre:</label>
          <input type="text" id="genre" name="genre" />
        </div>

        <div>
          <label for="rating">Rating:</label>
          <input type="text" id="rating" name="rating" />
        </div>

        <div>
          <label for="summary">Summary:</label>
          <input type="text" id="summary" name="summary" />
        </div>
      </form>
    </main>
  );
}
