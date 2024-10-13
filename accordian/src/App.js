import "./styles.css";
import { Accordion } from "./components/Accordion";
import { useState } from "react";
import { faqs } from "./faqs";

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}
