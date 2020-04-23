import React from 'react';

export function HelloStranger(props: {name?: string}) {
  if (props.name) {
    return <h1>Hello, {props.name}!</h1>
  } else {
    return <span>Hey, Stranger</span>
  }
}