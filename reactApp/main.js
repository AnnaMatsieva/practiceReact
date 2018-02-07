import React from 'react';
import ReactDOM from 'react-dom';
import Header from './src/header.jsx';
import Content from './src/content.jsx';
import Footer from './src/footer.jsx';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Content />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));