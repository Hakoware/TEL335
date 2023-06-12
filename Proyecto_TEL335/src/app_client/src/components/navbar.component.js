import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Athlete Fit</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/ExercisesList" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/test" className="nav-link">Test</Link>
          </li>
          <li className="navbar-item">
          <Link to="/Sentadilla" className="nav-link">Sentadilla</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}