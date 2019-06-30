import React, { Component } from 'react';

export class shape extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    radius: "",
    side:"",
    side1:"",
    side2:"",
    height:"",
    currentShape:"",
    resultCircle:"",
    resultSquare:"",
    resultRectangle:""
  };

  //  ------------- Circle ---------------------------------------------
  areaCircle = () =>{
      var currentShape = "Circle";
      var currentOperation = "Area";
      fetch('api/SampleData/CalculateAV/?radius='+this.state.radius+'&side='+this.state.side
          +'&side1='+this.state.side1+'&side2='+this.state.side2
          +'&height='+this.state.height+'&currentShape=' + currentShape+'&currentOperation=' + currentOperation )
      .then(response => response.text()) 
      .then(data => {
          this.setState({ resultCircle: data });
      });
  }
  volumeCircle = () =>{
    //console.log(this.state.radius);
    //console.log('volume');
    //this.setState({
    //    resultCircle: 150
      //});
      var currentShape = "Circle";
      var currentOperation = "Volume";
      fetch('api/SampleData/CalculateAV/?radius='+this.state.radius+'&side='+this.state.side
          +'&side1='+this.state.side1+'&side2='+this.state.side2
          +'&height='+this.state.height+'&currentShape=' + currentShape+'&currentOperation=' + currentOperation )
      .then(response => response.text()) 
      .then(data => {
          this.setState({ resultCircle: data });
      });
  }
  onChangeRadius(value){
    this.setState({
        radius: value
    });
  }

  // ----------------- Square ----------------------------------
  areaSquare = () => {
      var currentShape = "Square";
      var currentOperation = "Area";
    fetch('api/SampleData/CalculateAV/?radius='+this.state.radius+'&side='+this.state.side
        +'&side1='+this.state.side1+'&side2='+this.state.side2
        +'&height='+this.state.height+'&currentShape=' + currentShape+'&currentOperation=' + currentOperation )
    .then(response => response.text()) 
    .then(data => {
        this.setState({ resultSquare: data });
      });
  }
  volumeSquare = () => {
    //console.log(this.state.side);
      //console.log('volume');
      var currentShape = "Square";
      var currentOperation = "Volume";
      fetch('api/SampleData/CalculateAV/?radius='+this.state.radius+'&side='+this.state.side
          +'&side1='+this.state.side1+'&side2='+this.state.side2
          +'&height='+this.state.height+'&currentShape=' + currentShape+'&currentOperation=' + currentOperation )
      .then(response => response.text()) 
      .then(data => {
          this.setState({ resultSquare: data });
      });
  }
  onChangeSide(value){
    this.setState({
        side: value
    });
  }

    // ----------------- Rectangle ----------------------------------
    areaRectangle = () => {
        //console.log(this.state.side1);
        //console.log(this.state.side2);
        //console.log(this.state.height);
        //console.log('area');
        var currentShape = "Rectangle";
        var currentOperation = "Area";
        fetch('api/SampleData/CalculateAV/?radius='+this.state.radius+'&side='+this.state.side
            +'&side1='+this.state.side1+'&side2='+this.state.side2
            +'&height='+this.state.height+'&currentShape=' + currentShape+'&currentOperation=' + currentOperation )
        .then(response => response.text()) 
        .then(data => {
            this.setState({ resultRectangle: data });
        });
      }
      volumeRectangle = () => {
        //console.log(this.state.side1);
        //console.log(this.state.side2);
        //console.log(this.state.height);
          //console.log('volume');
          var currentShape = "Rectangle";
          var currentOperation = "Volume";
          fetch('api/SampleData/CalculateAV/?radius='+this.state.radius+'&side='+this.state.side
              +'&side1='+this.state.side1+'&side2='+this.state.side2
              +'&height='+this.state.height+'&currentShape=' + currentShape+'&currentOperation=' + currentOperation )
          .then(response => response.text()) 
          .then(data => {
              this.setState({ resultRectangle: data });
          });
      }
      onChangeSide1(value){
        this.setState({
            side1: value
        });
      }
      onChangeSide2(value){
        this.setState({
            side2: value
        });
      }
      onChangeHeight(value){
        this.setState({
            height: value
        });
      }

  render() {
    return (
    <div className="container">
    <h2>Calculate Area and Volume</h2>
    <p>This page is related to calculate area and volume in 3 different shapes.</p>
    <div className="panel-group">
      <div className="panel panel-default">
        <div className="panel-heading">Circle</div>
        <div className="panel-body">
        
        <div className="form-group col-sm-4">
      <label>radius</label>
      <input
        type="number"
        className="form-control"
        id="radius"
        placeholder="enter radius"
        value={this.state.radius}
          onChange={e => this.onChangeRadius(e.target.value)
          }/>


     </div>
        
                   <div className="row">
               <div className="col-sm-12 col-md-4 col-lg-1">
                         <button type="button" className="btn btn-primary" onClick={this.areaCircle}>
        Area
      </button>
                </div>
               <div className="col-sm-12 col-md-4 col-lg-1">
                         <button type="button" className="btn btn-primary" onClick={this.volumeCircle}>
        Volume
      </button>
                   </div>
               <div className="col-sm-12 col-md-4 col-lg-1">
                   <label>  result: <strong> {this.state.resultCircle} </strong></label>
                   </div>
           </div>


        </div>
      </div>
                   <br/>
      <div className="panel panel-default">
        <div className="panel-heading">Square</div>
        <div className="panel-body">

        <div className="form-group col-sm-4">
      <label>Side</label>
      <input
        type="number"
        className="form-control"
        id="side"
        placeholder="enter side size"
        value={this.state.side}
          onChange={e => this.onChangeSide(e.target.value)
        }/>


      
     </div>

           <div className="row">
               <div className="col-sm-12 col-md-4 col-lg-1">
                         <button type="button" className="btn btn-primary" onClick={this.areaSquare}>
        Area
      </button>
                </div>
               <div className="col-sm-12 col-md-4 col-lg-1">
                         <button type="button" className="btn btn-primary" onClick={this.volumeSquare}>
        Volume
      </button>

                   </div>
               <div className="col-sm-12 col-md-4 col-lg-1">
                   <label>  result: <strong> {this.state.resultSquare} </strong></label>
                   </div>
           </div>


        </div>
      </div>
                   <br/>
      <div className="panel panel-default">
        <div className="panel-heading">Rectangle</div>
        <div className="panel-body">
        
        <div className="form-group col-sm-4">
      <label>Side1</label>
      <input
        type="number"
        className="form-control"
        id="side1"
        placeholder="enter side size"
        value={this.state.side1}
          onChange={e => this.onChangeSide1(e.target.value)
        }/>
        <label>Side2</label>
        <input
        type="number"
        className="form-control"
        id="side2"
        placeholder="enter side size"
        value={this.state.side2}
          onChange={e => this.onChangeSide2(e.target.value)
        }/>
        <label>Height</label>
        <input
        type="number"
        className="form-control"
        id="height"
        placeholder="enter side size"
        value={this.state.height}
          onChange={e => this.onChangeHeight(e.target.value)
          }/>
     </div>
                <div className="row">
             <div className="col-sm-12 col-md-4 col-lg-1">      
                 <button type="button" className="btn btn-primary" onClick={this.areaRectangle}>
        Area
      </button>
      </div>
             <div className="col-sm-12 col-md-4 col-lg-1">
                 
      <button type="button" className="btn btn-primary" onClick={this.volumeRectangle}>
        Volume
      </button>
                 </div>
             <div className="col-sm-12 col-md-4 col-lg-1">
                  <label>  result: <strong> {this.state.resultRectangle} </strong></label>
                 </div>
         </div>
        </div>
      </div>
                  <br/>
                  <br/>
                  <br/>
    </div>
  </div>
    );

  }
}

