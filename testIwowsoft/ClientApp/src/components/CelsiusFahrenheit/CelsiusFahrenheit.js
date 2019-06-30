import React, { Component } from 'react';

export class CelsiusFahrenheit extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    Celsius: "",
    Fahrenheit:"",
    resultCelsiusToFahrenheit:"",
    resultFahrenheitToCelsius:"",
  };

  //  ------------- Circle ---------------------------------------------
  CelsiusToFahrenheit = () =>{
    var currentOperation = "ctof";
    fetch('api/SampleData/convertTemperature/?Celsius='+this.state.Celsius+'&Fahrenheit='+this.state.Fahrenheit
        +'&convert='+currentOperation)
    .then(response => response.text()) 
    .then(data => {
        this.setState({ resultCelsiusToFahrenheit: data });
    });
  }

  onChangeCelsius(value){
    this.setState({
        Celsius: value
    });
  }

  // ----------------- Square ----------------------------------
  FahrenheitToCelsius = () => {
    var currentOperation = "ftoc";
    fetch('api/SampleData/convertTemperature/?Celsius='+this.state.Celsius+'&Fahrenheit='+this.state.Fahrenheit
        +'&convert='+currentOperation)
    .then(response => response.text()) 
    .then(data => {
        this.setState({ resultFahrenheitToCelsius: data });
    });
  }

  onChangeFahrenheit(value){
    this.setState({
        Fahrenheit: value
    });
  }



  render() {
    return (
    <div className="container">
    <h2>Convert from Celsius to Fahrenheit and vice versa.</h2>
    <p>This page is to recieve inputs and convert from Celsius to Fahrenheit and vice versa.</p>
    <div className="panel-group">
      <div className="panel panel-default">
        <div className="panel-heading">Celsius to Fahrenheit</div>
        <div className="panel-body">
        
        <div className="form-group col-sm-4">
      <label>Celsius</label>
      <input
        type="number"
        className="form-control"
        id="celsius"
        placeholder="enter celsius"
        value={this.state.Celsius}
        onChange={e => this.onChangeCelsius(e.target.value)
        }/>
        <br/>
      <button type="button" className="btn btn-primary" onClick={this.CelsiusToFahrenheit}>
        Convert
      </button>
      <br/>
        <label>  Fahrenheit: <strong> {this.state.resultCelsiusToFahrenheit} </strong></label>
     </div>
        
        </div>
      </div>
        <br/>
        <br/>
      <div className="panel panel-default">
        <div className="panel-heading">Fahrenheit to Celsius</div>
        <div className="panel-body">

        <div className="form-group col-sm-4">
      <label>Fahrenheit</label>
      <input
        type="number"
        className="form-control"
        id="fahrenheit"
        placeholder="enter fahrenheit"
        value={this.state.Fahrenheit}
        onChange={e => this.onChangeFahrenheit(e.target.value)
        }/>
      <button type="button" className="btn btn-primary" onClick={this.FahrenheitToCelsius}>
        Convert
      </button>
      <br/>
      <label>  Celsius: <strong> {this.state.resultFahrenheitToCelsius} </strong></label>

     </div>

        </div>
      </div>
    </div>
  </div>
    );

  }
}

