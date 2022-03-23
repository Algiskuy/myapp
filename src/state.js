import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.start,
    };
  }

  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval);
  }

  increase() {
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1,
    }));
  }
  render() {
    return <div>{this.state.time} Detik</div>;
  }
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Timer start="0" />
        </header>
      </div>
    );
  }
}

// import React, { Component } from "react";

// export default class ClassComponent extends Component {
//   render() {
//     return <div>Helo Dunia</div>;
//   }
// }
