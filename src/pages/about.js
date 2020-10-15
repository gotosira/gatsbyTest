import React from "react";
import { Link } from "gatsby"
import './css/index.css';
import Header from '../components/header';

export default function About() {
    return (
      
      <div>
          <Link to='/contact/'>Contact</Link>
          <Header headerText="It's me Gsd!" />  
        <h1>About Gatsby</h1>
        <p>Such wow. Very React.</p>
      </div>
    )
  }