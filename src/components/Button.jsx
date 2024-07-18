import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import '../index.css'

function Button({text}) {
  return (
  <AwesomeButton 
  className="rancho text-3xl"
    type="primary"
    href = "https://www.linkedin.com/in/ananya-pappula-1735b9288/"
    
  >
    {text}
    </AwesomeButton>);
}

export default Button;
