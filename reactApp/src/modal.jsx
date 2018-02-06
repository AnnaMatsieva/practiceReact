import React from 'react';

class Modal extends React.Component {
	render() {
		const stylesL = {
			position: 'fixed',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			width: 200,
			height: 200,
			backgroundColor: 'rgba(0, 0, 0, 0.3)'
		};

		return (
			<div style={stylesL}></div>
		);
	}
}

export default Modal;