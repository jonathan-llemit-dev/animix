import React, { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";
import Menu from "./Menu";
import Header from "./Header";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  function handleToggleForm(showForm) {
    setShowForm(!showForm);
  }

  return (
    <div className="container">
      <Header />
      {showForm ? (
        <Form onToggleForm={handleToggleForm} />
      ) : (
        <Menu onToggleForm={handleToggleForm} />
      )}
      <Footer />
    </div>
  );
}
