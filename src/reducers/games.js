import { SET_GAMES } from '../action';

export default function games(state = [], action = {}) {
	switch(action.type) {
		case SET_GAMES:
			return action.games;
		default: return state;
	}
}