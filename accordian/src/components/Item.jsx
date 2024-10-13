import { useState } from "react";

export function Item({ faq, index, setOpenIndexHandler, openIndex, children }) {
  const open = openIndex === index;
  console.log(open);
  return (
    <>
      <li
        className={`item ${open ? "open text" : ""}`}
        onClick={() => setOpenIndexHandler(open ? null : index)}
      >
        <p className="number text">{index <= 9 ? `0${index}` : index}</p>
        <span className="title text ">{faq.title}</span>
        <p className="icon title">{open ? "-" : "+"}</p>
        {open ? (
          <div className="content-box ">
            <p>{children}</p>
          </div>
        ) : (
          ""
        )}
      </li>
    </>
  );
}
