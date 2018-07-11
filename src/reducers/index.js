// RootReducer
import { combineReducers } from 'redux';
import CanvasReducer from './reducer_canvas';

const rootReducer = combineReducers({
	canvas: CanvasReducer
});

export default rootReducer;
