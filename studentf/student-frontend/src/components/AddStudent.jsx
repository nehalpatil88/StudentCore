import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/students", student);
    navigate("/");
  };

  return (
    <div className="card p-4 shadow-sm">
      <h4>Add New Student</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Course</label>
          <input
            type="text"
            name="course"
            value={student.course}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button className="btn btn-success me-2" type="submit">Save</button>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
