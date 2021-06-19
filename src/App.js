import React from 'react';
import logo from './logo.svg';
import './App.css';

import Car from './Car/Car';
import Bike from './Bike/Bike';

export default class App extends React.Component {
  constructor(props) {
    console.log('app constructor');
    super(props);

    this.state = {
      cars: [
        { brand: 'Mazda', year: 2002, color: 'red' },
        { brand: 'Toyota', year: 2009, color: 'yellow' },
        { brand: 'Subaru', year: 2003, color: 'black' },
      ],
      showCars: true,
    };
  }

  toggleCars = () => {
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  onChangeName(brand, index) {
    const car = this.state.cars[index];
    car.brand = brand;

    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars,
    });
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({
      cars,
    });
  }

  componentWillMount() {
    console.log('App componentWillMount');
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }

  render() {
    console.log('render');

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.props.title}</h1>

          <div className="car-wrapper">
            {this.state.showCars &&
              this.state.cars.map((car, index) => (
                <Car
                  index={index}
                  key={index}
                  brand={car.brand}
                  year={car.year}
                  color={car.color}
                  onChangeName={(event) => this.onChangeName(event.target.value, index)}
                  onDelete={this.deleteHandler.bind(this, index)}
                />
              ))}
          </div>

          <button onClick={this.toggleCars}>
            {this.state.showCars ? 'hide cars' : 'show cars'}
          </button>
          <hr></hr>

          {/* <Bike /> */}
        </header>
      </div>
    );
  }
}
