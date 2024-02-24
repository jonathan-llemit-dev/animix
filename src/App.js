import React, { useState } from "react";
import { Form } from ".";
import { Footer } from "./Footer";
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
