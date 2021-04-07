import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Root(props) {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}
