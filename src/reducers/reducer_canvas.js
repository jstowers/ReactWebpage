import { CANVAS_ITEM } from '../actions/index';

export default function (state = [], action) {
	switch (action.type) {
		case CANVAS_ITEM:
			return [
				action.payload, ...state
			];
	}

	return state;
}
