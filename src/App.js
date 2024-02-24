import React, { useState } from "react";
import { Menu, Form, Footer } from ".";
import { Header } from "./Header";

export function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="container">
      <Header />
      {menu ? <Menu /> : <Form />}
      <Footer />
    </div>
  );
}
