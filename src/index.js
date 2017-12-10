import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers';
// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<App />
	, document.querySelector('.container'));


//<Provider store={createStoreWithMiddleware(reducers)}>
//</Provider>