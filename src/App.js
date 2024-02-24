import React, { useState } from "react";
import { Form, Footer } from ".";
import { Menu } from "./Menu";
import { Header } from "./Header";

export default function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="container">
      <Header />
      {menu ? <Menu /> : <Form />}
      <Footer />
    </div>
  );
}
