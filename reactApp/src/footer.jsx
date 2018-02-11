import React from 'react';

class Footer extends React.Component {
   render() {
      return (
         <footer>
         	<ul className="footer-menu flex-column">
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
            </ul>
         </footer>
      );
   }
}

export default Footer;