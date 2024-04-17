import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content align-items my-4 text-center" data-aos="fade-down" >
      <h1 className="m-5">UserDashboard Page</h1>
      <button className="w-25 m-auto" onClick={handleLogout}>Go to Logout Page</button>
    </div>
  );
};

export default UserDashboard;
