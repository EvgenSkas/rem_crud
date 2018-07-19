import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames';

export class GameForm extends Component {
	// static propTypes = {
	// 	prop: PropTypes
	// }

	state = {
		title: '',
		cover: '', 
		errors: {}
	}

	handleChange = (e) => {
		if(this.state.errors[e.target.name]){
			let errors = Object.assign({}, this.state.errors);
			delete errors[e.target.name];
			this.setState({ 
				[e.target.name]: e.target.value,
				errors 
			});
		}			
		this.setState({
			[e.target.name]: e.target.value
		})		
	}

	handleSumbmit = (e) => {
		e.preventDefault();


		// validation
		let errors = {};
		if (this.state.title === '') errors.title = "Can't be empty!";
		if (this.state.cover === '') errors.cover = "Can't be empty!";
		this.setState({ errors });
	}

	render() {
		return (
			<form className="ui form" onSubmit={this.handleSumbmit}>
				<h1> Add GamesForm </h1>

				<div className={classnames('field', { error: !!this.state.errors.title})}>
					<label htmlFor="title">Title</label>
					<input
						id="title"
						name="title"
						value={this.state.title}
						onChange={this.handleChange}
					/>
					<span>{this.state.errors.title}</span>
				</div>

				<div className={classnames('field', { error: !!this.state.errors.cover})}>
					<label htmlFor="cover">Cover URL</label>
					<input
						id="cover"
						name="cover"
						value={this.state.cover}
						onChange={this.handleChange}
					/>
				</div>
				<div className="field">
					{this.state.cover !== '' && <img src={this.state.cover} alt="cover" className="ui small bordered image" />}
				</div>
				<span>{this.state.errors.cover}</span>

				<div className="field">
					<button className="ui primary button">
						Save
					</button>
				</div>
			</form>
		)
	}
}

const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(GameForm)
