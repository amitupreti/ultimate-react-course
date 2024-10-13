import { Item } from "./Item";
import { useState } from "react";

export function Accordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <ul className="accordion">
      {faqs.map((faq, index) => {
        return (
          <Item
            faq={faq}
            key={index}
            index={index}
            openIndex={openIndex}
            setOpenIndexHandler={setOpenIndex}
          >
            {faq.text}
          </Item>
        );
      })}
    </ul>
  );
}
