const Car = ({ brand, color, year, onChangeName, onDelete }) => {
  return (
    <div className="car">
      <h2>Car brand: {brand}</h2>
      <h2>year: {year}</h2>

      <div style={{ color: color }}>color:{color}</div>

      <input type="text" onChange={onChangeName} value={brand} />
      <button onClick={onDelete}>Delete car</button>
    </div>
  );
};

export default Car;
