import { useState, useEffect } from 'react';
import axios from 'axios';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('/vehicle_postings')
      .then(response => setCars(response.data.postings))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {cars.map(car => (
          <div className="col-md-4 mb-4" key={car.id}>
            <div className="card">
              <img src={car.image_url} className="card-img-top" alt={car.manufacturer} />
              <div className="card-body">
                <h5 className="card-title">{car.year} {car.manufacturer} {car.vehicle_model}</h5>
                <p className="card-text">Price: ${car.price}</p>
                <p className="card-text">Condition: {car.condition}</p>
                <a href={car.url} className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
