import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {

  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    course: "",
    semester: "",
    email: ""
  });

  const handleChange = (e) => {

    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Student added successfully!");

    navigate("/students");
  };

  return (
    <div className="page">

      <div className="form-container">

        <p className="tag">STUDENT MANAGEMENT</p>

        <h1>Add New Student</h1>

        <p className="form-description">
          Enter the student's information below.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>Student Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter student name"
              value={student.name}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Course</label>

            <input
              type="text"
              name="course"
              placeholder="Enter course"
              value={student.course}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Semester</label>

            <select
              name="semester"
              value={student.semester}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Semester
              </option>

              <option value="Semester 1">
                Semester 1
              </option>

              <option value="Semester 2">
                Semester 2
              </option>

              <option value="Semester 3">
                Semester 3
              </option>

              <option value="Semester 4">
                Semester 4
              </option>

            </select>

          </div>

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={student.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/students")}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="primary-btn"
            >
              Add Student
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddStudent;