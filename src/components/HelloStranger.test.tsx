import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { HelloStranger } from "./HelloStranger";

let container: Element = document.createElement("div");
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
});

it("renders with or without a name", () => {
  act(() => {
    render(<HelloStranger/>, container);
  });
  expect(container.textContent).toBe("Hey, Stranger");

  act(() => {
    render(<HelloStranger name="Jenny" />, container);
  });
  expect(container.textContent).toBe("Hello, Jenny!");

  act(() => {
    render(<HelloStranger name="Margaret" />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
});