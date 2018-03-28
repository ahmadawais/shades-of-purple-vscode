/**
 * Demo of Shades of Purple VSCode theme.
 *
 * I'm 💜'ing it.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
 * VSCode Component.
 *
 * @class VSCode
 * @extends {React.Component}
 */
class VSCode extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null
		};
	}

	// Render.
	render() {
		return (
			<button className="VSCode" onClick={() => alert('click')}>
				{this.props.value}
			</button>
		);
	}
}
