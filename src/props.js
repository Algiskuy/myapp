import React, { Component } from "react";

function Carnaby(props) {
  return <h1>Halo {props.nama}</h1>;
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Carnaby Name="Algis" />
      </div>
    );
  }
}

// import React from "react";

// export default function FunctionComponent() {
//   return <div>Helo Dunia</div>;
// }
