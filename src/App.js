import React, { Component, useEffect } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';

const Page = ({ title }) => {

  useEffect(() => {
    window.addEventListener("offline", (event) => {
      console.log('!!!!!!!!', event)
      addNotification({
            title: 'Offline',
            subtitle: 'connection lost',
            message: 'connection lost',
            theme: 'darkblue',
            native: true // when using native, your OS will handle theming.
        })});

    window.addEventListener("online", (event)=>  {
      console.log('!!!!!!!!', event)
      
      addNotification({
      title: 'online',
      subtitle: 'connection established',
      message: 'connection established',
      theme: 'darkblue',
      native: true // when using native, your OS will handle theming.
  })});
  })

  return (
    <div className="App">
        <Notifications />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
      </p>
    </div>
  );
} 

const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/settings" component={Settings}/>
      </Router>
    );
  }
}

export default App;