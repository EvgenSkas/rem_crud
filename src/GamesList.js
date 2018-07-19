import React from 'react'

export default ({games}) => {
	const emptyMessage = (
		<p>There are no games yet in your collection.</p>
	)
	const gamesList = (
		<p>games list</p>
	)		
	return (
		<div>
			<h1>Games List</h1>
			{(games.length === 0) ? emptyMessage : gamesList}
		</div>
	)
}
