import React from 'react';

class Login extends React.Component {
   render() {
      return (
         <form>
            <input type="text" placeholder="Login" />
            <input type="password" placeholder="Password" />
         </form>
      );
   }
}

export default Login;