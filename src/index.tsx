import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Counter } from './components/Counter';
import { HelloStranger } from "./components/HelloStranger";

ReactDOM.render(
  <div>
    <Hello compiler="TypeScript" framework="React" />
    <HelloStranger name="Alice" />
    <Counter />
  </div>,
  document.getElementById("example")
);