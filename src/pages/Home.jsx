import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container-fluid w-100">
      <header className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <h1 className="fs-4">Used Cars</h1>
        </a>
        <div className="col-md-3">
          <a href="/search" className="btn btn-primary">
            Find Your Car
          </a>
        </div>
      </header>

      <div className="row align-items-center">
        <div className="col-md-6">
          <h2>Your Next Adventure Starts Here</h2>
          <p>Find a used car that fits your lifestyle and budget.</p>
          <a href="/search" className="btn btn-lg btn-primary">
            Browse Cars
          </a>
          <button onClick={handleLogin}>Go to Login Page</button>
        </div>
        <div className="col-md-6">
          {/* <img
            src="images/car-banner.jpg"
            alt="Used Cars Banner"
            className="img-fluid rounded"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
