import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


  // BEGIN (write your solution here)
	const isPrime = (n) => {
		if( n <= 1 ) return false;
		for(let i = 2; i <= n; ++i) {
			console.log(i)
			if(n % i === 0 && n === i) {
				return true;
			}
		}
		return false;
	}
  // END

class App extends Component {
	
  render() {
		console.log(isPrime(4))
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
