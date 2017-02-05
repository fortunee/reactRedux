import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jombotron">
        <h1>Administration</h1>
        <p>Ultra-Responsive User Administration Web App built with React, Redux and React router </p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more >></Link>
      </div>
    );
  }
}

export default HomePage;
