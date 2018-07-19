import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import gamesPage from './GamesPage';
import { GameForm } from './GameForm';




class App extends Component {
	
  render() {
    return (
			<BrowserRouter>

					<div className="ui container">
						<div className="ui three item menu">
							<NavLink className="item" activeClassName="active" exact to="/">Home</NavLink>					
							<NavLink className="item" activeClassName="active" exact to="/games">Games</NavLink>							
							<NavLink className="item" activeClassName="active" to="/games/new">Add games</NavLink>							
						</div>
	

						<Route exact path="/games" component={gamesPage} />
						<Route path="/games/new" component={GameForm} />
					</div>

			</BrowserRouter>

    );
  }
}

export default App;
