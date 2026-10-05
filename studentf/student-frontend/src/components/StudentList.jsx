import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8080/api/students");
    setStudents(result.data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8080/api/students/${id}`);
    loadStudents();
  };

  return (
    <div>
      <Link to="/add" className="btn btn-primary mb-3">➕ Add Student</Link>
      <table className="table table-bordered table-striped">
        <thead className="table-dark text-center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>
                <Link
                  to={`/edit/${student.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  ✏️ Edit
                </Link>
                <button
                  onClick={() => deleteStudent(student.id)}
                  className="btn btn-danger btn-sm"
                >
                  🗑️ Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
