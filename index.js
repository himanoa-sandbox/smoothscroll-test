// 登録9万人おめでとうございます

import React from "react";
import ReactDOM from "react-dom";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const toTop = e => {
  e.preventDefault();
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
};
const LoveNatori = () =>
  new Array(100)
    .fill("名取すこだぞ")
    .map(natori => (
      <h1>{`${Math.floor(
        Math.random() * Math.floor(100)
      ).toString()}: ${natori}`}</h1>
    ));

const App = () => (
  <div>
    <h1>🚑🍆🏍</h1>
    <LoveNatori />
    <button onClick={toTop}>病棟に戻ろう!</button>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
