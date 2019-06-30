import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render () {
        return (
          <div>
            <h1>Test IWOWSOFT</h1>
    <p>
    We need you to develop the calculator(s) that can do the jobs below.
  </p><p>
 

  Calculate addition, subtraction, division and multiplying<br/>
  Calculate Area
  <br/>Calculate Volume
  <br/>Convert from Celsius to Fahrenheit and vice versa.
 
  </p><p>
  It is important to apply TDD and SOLID principle.  
  </p>
        </div>
      );
    }
}
