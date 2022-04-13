import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './component/HelloComponent'
// create component

// function HelloComponent(){
//   return <h1>Component</h1>
// }

// class HelloComponent extends React.Component{
//   render(){
//     return <h1>hello component</h1>
//   }
// }

ReactDOM.render(<HelloComponent/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
