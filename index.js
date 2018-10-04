// 登録9万人おめでとうございます

import React from "react";
import ReactDOM from "react-dom";
const LoveNatori = () =>
  new Array(10000)
    .fill(
      "名取すこだぞ名取すこだぞ名取すこだぞ名取すこだぞ名取すこだぞ名取すこだぞ名取すこだぞ名取すこだぞ名取すこだぞ"
    )
    .map(natori => <h1>natori</h1>);
ReactDOM.render(<LoveNatori />, document.getElementById("app"));
