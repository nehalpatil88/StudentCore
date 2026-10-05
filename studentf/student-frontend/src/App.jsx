import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentList from "./Components/studentList";
import EditStudent from "./Components/Editstudent";
import AddStudent from "./Components/AddStudent";
function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h2 className="text-center mb-4">🎓 Student Management System</h2>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
