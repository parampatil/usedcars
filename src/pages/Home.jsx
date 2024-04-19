import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="container-fluid w-100 p-0">
      <img
        src="https://lp-auto-assets.s3.amazonaws.com/preowned/M4/header.jpg"
        className="img-fluid w-100 p-0 m-0"
        alt="Responsive image"
      ></img>

      {/* Search bar */}
      <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 shadow-lg">
        <form className="d-flex w-50">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>

      {/* Login button in a colorful card */}
      <div className="container-fluid bg-dark text-white shadow-lg d-flex justify-content-evenly p-3">
        <div className="card p-2">
          <h4 className="m-2">Login Now</h4>
          <Link className="btn btn-primary btn-block" to="/login">
            Login
          </Link>
        </div>
        <div className="card p-2">
          <h4 className="m-2">Sign Up Now</h4>
          <Link className="btn btn-primary btn-block" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Random information in colorful cards */}
      <div className="container-fluid p-5 d-flex flex-column">
        <div className="card bg-primary text-white shadow-lg mb-4">
          <div className="card-body">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>Wide selection of quality used cars</li>
              <li>Competitive pricing</li>
              <li>Transparent buying process</li>
            </ul>
          </div>
        </div>
        <div className="card bg-success text-white shadow-lg mb-4">
          <div className="card-body">
            <h3>Benefits of Buying Used Cars</h3>
            <ul>
              <li>Lower depreciation</li>
              <li>Potential cost savings</li>
              <li>Reduced insurance costs</li>
            </ul>
          </div>
        </div>
        <div className="card bg-info text-white shadow-lg mb-4">
          <div className="card-body">
            <h3>Our Services</h3>
            <ul>
              <li>Car inspections and certifications</li>
              <li>Finance options available</li>
              <li>Trade-in options</li>
            </ul>
          </div>
        </div>
        <div className="card bg-warning text-dark shadow-lg mb-4">
          <div className="card-body">
            <h3>Customer Satisfaction</h3>
            <p>
              We prioritize customer satisfaction and strive to make your car
              buying experience smooth and enjoyable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
