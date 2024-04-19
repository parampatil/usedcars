import { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Profile = () => {
  const initialData = {
    email: 'john.doe44@example.com',
    first_name: 'John',
    last_name: 'Doe',
    password: 'securePassword123',
    city: 'Bloomington',
    state: 'IN',
  };

  const [formData, setFormData] = useState({ ...initialData });
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData({ ...initialData });
    setIsEditing(false);
  };

  const handleSave = async () => {
    setIsEditing(false);
    try {
      const response = await fetch('/profileupdate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Update successful:', data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container-fluid w-100">
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4 shadow-lg rounded">
                <div className="card-body text-center">
                  <img
                    // src={currentUser.profileImageURL}
                    src={"https://ui-avatars.com/api/?size=512&bold=true&background=random&name="+formData.first_name+"+"+formData.last_name}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3">{formData.first_name + " " + formData.last_name}</h5>
                  <p className="text-muted mb-4">{formData.city + ", " + formData.state}</p>
                  <div className="d-flex justify-content-center mb-2">
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4 shadow-lg rounded">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{formData.first_name + " " + formData.last_name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0 d-flex align-items-center">
                        {formData.email}{" "}
                        {isEditing && (
                          <button type="button" className="btn ms-auto" onClick={handleEdit}>
                            <i className="fa fa-pencil fa-lg" />
                          </button>
                        )}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Password</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0  d-flex align-items-center">
                        **********************
                        <Link to={"/resetpassword"} type="button" className="btn ms-auto">
                          <i className="fa fa-pencil fa-lg" />
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/* Other fields go here */}
                  {/* Include Save and Cancel buttons when editing */}
                  {isEditing && (
                    <div>
                      <button className="btn btn-secondary me-2" onClick={handleCancel}>
                        Cancel
                      </button>
                      <button className="btn btn-primary" onClick={handleSave}>
                        Save
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
