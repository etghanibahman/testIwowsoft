import React, { Component } from 'react';
import './calculator.css';
import { Button } from './Button';
import { Input } from './Input';
import { ClearButton } from './ClearButton';
//import * as math from 'mathjs';

export class calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  addToInput = val => {
      if ((val === "+" || val === "-" || val === "/" || val === "*")
          && (this.state.input.indexOf("+") > 0 || this.state.input.indexOf("-") > 0 || this.state.input.indexOf("/") > 0 || this.state.input.indexOf("*") > 0)) {
          return;
        }else  {
          this.setState({input: this.state.input + val});
        }
  }

  handleEqual = () => {
      var urlPart = this.state.input.replace("+","a").replace("-","s").replace("*","m").replace("/","d").replace(".","dot");
      fetch('api/SampleData/Calculator/?opration=' + urlPart )
    .then(response => response.text()) 
    .then(data => {
        this.setState({ input: data });
    });
  }

  handleMultiply = val => {
      if ((val === "+" || val === "-" || val === "/" || val === "*" || val === "x")
    && (this.state.input.indexOf("+") > 0 || this.state.input.indexOf("-") > 0 || this.state.input.indexOf("/") > 0 || this.state.input.indexOf("*") > 0)) {
          return;
      }else  {
          if (val === "x") {
              this.setState({input: this.state.input + val.replace("x", "*")});
          }
      }
      
}

  render() {
      return (
              <div className="container">
    <h2>Calculator</h2>
    <p>This is a calculator.</p>
    <div className="panel-group">
      <div className="panel panel-default">
        <div className="panel-body">

      <div className="app">
        <div className="calculator-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.handleMultiply}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({input: ""})}>clear</ClearButton>
          </div>
        </div>
      </div>

        </div>
      </div>
    </div>
  </div>
    );
  }
}
