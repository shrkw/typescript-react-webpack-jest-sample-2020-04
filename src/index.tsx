import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Counter } from './components/Counter';

ReactDOM.render(
  <div>
    <Hello compiler="TypeScript" framework="React" />
    <Counter />
  </div>,
  document.getElementById("example")
);