import { Link } from "react-router-dom";

function StudentList() {

  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      course: "MSc Computer Science",
      semester: "Semester 3"
    },
    {
      id: 2,
      name: "Priya Patel",
      course: "MSc Computer Science",
      semester: "Semester 3"
    },
    {
      id: 3,
      name: "Aman Verma",
      course: "MSc Computer Science",
      semester: "Semester 2"
    },
    {
      id: 4,
      name: "Sneha Joshi",
      course: "MSc Computer Science",
      semester: "Semester 1"
    }
  ];

  return (
    <div className="page">

      <div className="page-header">
        <div>
          <p className="tag">STUDENT MANAGEMENT</p>
          <h1>Student List</h1>
        </div>

        <Link to="/add-student" className="primary-btn">
          + Add Student
        </Link>
      </div>

      <div className="student-grid">

        {students.map((student) => (

          <div className="student-card" key={student.id}>

            <div className="student-avatar">
              {student.name.charAt(0)}
            </div>

            <div className="student-info">

              <h2>{student.name}</h2>

              <p>{student.course}</p>

              <span>{student.semester}</span>

            </div>

            <Link
              to={`/students/${student.id}`}
              className="details-btn"
            >
              View Details
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default StudentList;