import React from 'react';
import './Car.scss';
import withClass from '../hoc/withClass';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.index === 1) {
      this.inputRef.current.focus();
    }
  }

  render() {
    const inputClasses = ['input'];

    if (this.props.brand) {
      inputClasses.push('green');
    } else {
      inputClasses.push('red');
    }

    if (this.props.brand.length > 4) {
      inputClasses.push('bold');
    }

    return (
      <section>
        <h2>Car brand: {this.props.brand}</h2>
        <h2>year: {this.props.year}</h2>

        <div style={{ color: this.props.color }}>color:{this.props.color}</div>

        <input
          ref={this.inputRef}
          className={inputClasses.join(' ')}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.brand}
        />
        <button onClick={this.props.onDelete}>Delete car</button>
      </section>
    );
  }
}

export default withClass(Car, ['car', 'Car']);

// const Car = ({ brand, color, year, onChangeName, onDelete }) => {
// const inputClasses = ['input'];

// if (brand) {
// inputClasses.push('green');
// } else {
// inputClasses.push('red');
// }

// if (brand.length > 4) {
// inputClasses.push('bold');
// }

// return (
// <div className="car Car">
//     <h2>Car brand: {brand}</h2>
//     <h2>year: {year}</h2>

//     <div style={{ color: color }}>color:{color}</div>

//     <input className={inputClasses.join(' ')} type="text" onChange={onChangeName} value={brand} />
//     <button onClick={onDelete}>Delete car</button>
// </div>
// );
// };

// export default Car;
