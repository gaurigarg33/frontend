"use strict";
const e = React.createElement;
class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: 'hello' };
  }
  render() {
    return e(
      "h1", {}, "Hello World"
    );
  }
}
const domContainer = document.querySelector("#root");
ReactDOM.render(e(Hello), domContainer);
