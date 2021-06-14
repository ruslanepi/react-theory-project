import React from 'react';

export default class Bike extends React.Component {
  state = {
    size: 'S',
    brand: 'STELS',
    title: 'O MY BIKE',
  };

  paint = (newColor) => {
    this.setState({
      color: newColor,
    });
  };

  handleInput = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  render() {
    console.log('render');

    return (
      <div>
        {console.log(this.state)}
        <h1>{this.state.title}</h1>
        <h1>Bike brand: {this.state.brand}</h1>

        <input type="text" onChange={this.handleInput} />

        <div style={{ color: this.state.color }}>color:{this.state.color}</div>
        <button
          onClick={() => {
            this.paint('red');
          }}>
          Paint this bike!
        </button>
      </div>
    );
  }
}
