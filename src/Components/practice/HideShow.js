import React from "react";
import { useState } from "react";
import { Test1 } from "./Test1";
export const HideShow = () => {
  const [toggle, settoggle] = useState(false);
  const HashChangeEvent = () => {
    settoggle((prevtoggle) => !prevtoggle);
  };
  return (
    <div>
      <button onClick={() => HashChangeEvent()}>
        {toggle ? "show" : "Hide"}
      </button>
      {toggle && <Test1 />}
    </div>
  );
};
