import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8080/api/students/${id}`);
    setStudent(result.data);
  };

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/students/${id}`, student);
    navigate("/");
  };

  return (
    <div className="card p-4 shadow-sm">
      <h4>Edit Student</h4>
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
        <button className="btn btn-primary me-2" type="submit">
          Update
        </button>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
