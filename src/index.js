//import ReactDOM from 'react-dom/client';
//import Home from './containers/Home';
//import Users from './containers/Users';
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from "./styles/globalStyle";
import Routes from './routes'

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render()
<Users />,
)
ReactDOM.render(
  <>
<Home /> <GlobalStyle/> 
</>, */

ReactDOM.render(
  <>
  <Routes />
  <GlobalStyle />
  </>,

document.getElementById("root")
);

  