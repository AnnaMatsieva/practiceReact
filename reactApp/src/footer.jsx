import React from 'react';

class Footer extends React.Component {
   render() {
      return (
         <div>
         	<ul className="footer-menu flex-column">
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
            </ul>
         </div>
      );
   }
}

export default Footer;