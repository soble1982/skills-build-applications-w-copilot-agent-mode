import { Link, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
          <p className="col-md-8 fs-4">
            A modern multi-tier fitness tracking experience for teams and individuals.
          </p>
          <Link className="btn btn-primary btn-lg" to="/dashboard">
            Explore dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="container py-5">
      <h2>Dashboard</h2>
      <p>Workouts, teams, and leaderboards will appear here.</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            OctoFit
          </Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
