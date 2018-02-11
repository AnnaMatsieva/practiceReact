import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.jsx';
import Content from './content.jsx';
import Login from './login.jsx';
import Footer from './footer.jsx';

class App extends React.Component {
   render() {
      return (
         <div className="app">
            <Header />
            <Content />
            <Login />
            <Footer />
         </div>
      );
   }
};

export default App;
