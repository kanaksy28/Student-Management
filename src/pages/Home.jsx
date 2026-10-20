import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">

      <div className="hero">

        <div>
          <p className="tag">STUDENT MANAGEMENT SYSTEM</p>

          <h1>
            Manage Students
            <br />
            <span>Simply & Efficiently</span>
          </h1>

          <p className="description">
            A React application for managing student information
            using React Router and dynamic routing.
          </p>

          <Link to="/students" className="primary-btn">
            View Students →
          </Link>
        </div>

        <div className="hero-card">
          <div className="icon">🎓</div>
          <h2>StudentHub</h2>
          <p>React Router Application</p>
        </div>

      </div>

      <div className="features">

        <div className="feature-card">
          <h3>👨‍🎓 Student List</h3>
          <p>View all registered students.</p>
        </div>

        <div className="feature-card">
          <h3>🔍 Student Details</h3>
          <p>View individual student information.</p>
        </div>

        <div className="feature-card">
          <h3>➕ Add Student</h3>
          <p>Add new students to the system.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;