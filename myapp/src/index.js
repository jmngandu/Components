import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App";

const reactContentRoot = document.querySelector('#root');
// const myElement = React.createElement('ul', null, [
// React.createElement('li', null, 'james'),
// React.createElement('li', null, 'john'),
// ])


ReactDOM.render(<App/>, reactContentRoot)