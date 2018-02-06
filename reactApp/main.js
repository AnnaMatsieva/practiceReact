import React from 'react';
import ReactDOM from 'react-dom';
import Header from './src/Header.jsx';
import Content from './src/Content.jsx';
import Footer from './src/Footer.jsx';
/*import Modal from './src/Modal.jsx';*/

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Content />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
/*ReactDOM.render(<Modal />, document.getElementById('modal'));*/