import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import '../index.css'

function Button() {
  return (
  <AwesomeButton 
  className="rancho"
    type="primary"
    href = "https://www.linkedin.com/in/ananya-pappula-1735b9288/"
    
  >
    Let's Connect!
    </AwesomeButton>);
}

export default Button;
