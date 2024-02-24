import React, { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";
import Menu from "./Menu";
import Header from "./Header";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="container">
      <Header />
      {showMenu ? <Form /> : <Menu />}
      <Footer />
    </div>
  );
}
