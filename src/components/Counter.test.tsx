// https://qiita.com/taneba/items/b21f5fee17eb593b30c8

import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {Counter} from "./Counter";

afterEach(cleanup);

describe("Counter", () => {
  test("初期値は0である", () => {
    const { container, getByText } = render(<Counter />);
    expect(getByText('You clicked 0 times')).toBeInTheDocument();
  })
  test('「+」ボタンを押すと１つカウントアップする', () => {
    const { container, getByText } = render(<Counter />);
    fireEvent.click(getByText("Click me"));
    expect(getByText('You clicked 1 times')).toBeInTheDocument();
  });
});