/**
 * Demo of Shades of Purple VSCode theme.
 *
 * I'm 💜'ing it.
 */
import React from 'react';
import { render } from 'react-dom';
import './index.css';

const justChecking = render();
justChecking();

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
			<CustomDiv>
				<button className="VSCode" onClick={() => alert('click')}>
					{this.props.value}
				</button>

				<Message msg="Shades of Purple" titleClass="heading">
					<p>Testing the settings in VSCode Shades of Purple 💜 theme.</p>
				</Message>
			</CustomDiv>
		);
	}
}

VSCode();
