import { useParams, Link } from "react-router-dom";

function StudentDetails() {

  const { id } = useParams();

  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      course: "MSc Computer Science",
      semester: "Semester 3",
      email: "rahul@example.com",
      phone: "9876543210"
    },
    {
      id: 2,
      name: "Priya Patel",
      course: "MSc Computer Science",
      semester: "Semester 3",
      email: "priya@example.com",
      phone: "9876543211"
    },
    {
      id: 3,
      name: "Aman Verma",
      course: "MSc Computer Science",
      semester: "Semester 2",
      email: "aman@example.com",
      phone: "9876543212"
    },
    {
      id: 4,
      name: "Sneha Joshi",
      course: "MSc Computer Science",
      semester: "Semester 1",
      email: "sneha@example.com",
      phone: "9876543213"
    }
  ];

  const student = students.find(
    (student) => student.id === Number(id)
  );

  if (!student) {
    return (
      <div className="not-found">
        <h1>Student Not Found</h1>

        <p>
          No student exists with ID {id}.
        </p>

        <Link to="/students" className="primary-btn">
          Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div className="page">

      <div className="details-container">

        <div className="details-header">

          <div className="large-avatar">
            {student.name.charAt(0)}
          </div>

          <div>
            <p className="tag">STUDENT PROFILE</p>
            <h1>{student.name}</h1>
            <p>Student ID: {student.id}</p>
          </div>

        </div>

        <div className="details-grid">

          <div className="detail-box">
            <small>Course</small>
            <h3>{student.course}</h3>
          </div>

          <div className="detail-box">
            <small>Semester</small>
            <h3>{student.semester}</h3>
          </div>

          <div className="detail-box">
            <small>Email</small>
            <h3>{student.email}</h3>
          </div>

          <div className="detail-box">
            <small>Phone</small>
            <h3>{student.phone}</h3>
          </div>

        </div>

        <Link to="/students" className="back-btn">
          ← Back to Student List
        </Link>

      </div>

    </div>
  );
}

export default StudentDetails;