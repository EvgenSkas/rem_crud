import React, { Component } from 'react';
import { connect } from 'react-redux';
import GamesList from './GamesList';
import { fetchGames } from './action';

class GamesPage extends Component {
	componentDidMount() {
		this.props.fetchGames();
	}

	render() {
		return (
			<div>
				<GamesList games={this.props.games}/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	games: state.games
})

export default connect(mapStateToProps, { fetchGames })(GamesPage);
