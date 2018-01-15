import React from 'react';
import { store } from './store';
import { Provider, connect } from 'react-redux';
import Counter from './counter';


export default class Root extends React.Component {

    componentDidCatch(error, info) {
		console.log(error, info);
	}

	render() {
		return (
			<Provider store={store}>
				<div style={{marginTop: 80}}>
					This was rendered by app 1, which is written in React.
					<Counter />
				</div>
			</Provider>
		);
	}
}
