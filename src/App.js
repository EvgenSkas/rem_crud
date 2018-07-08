import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import gamesPage from './GamesPage';
import Home from './Home';




class App extends Component {
	
  render() {
    return (
			<BrowserRouter>

					<div className="App">
						<header className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
							<h1 className="App-title">Welcome to React</h1>
						</header>
						<Link to="/">Home</Link>					
						<Link to="/games">Games</Link>	

						<Route exact path="/" component={Home} />
						<Route path="/games" component={gamesPage} />
					</div>

			</BrowserRouter>

    );
  }
}

export default App;
