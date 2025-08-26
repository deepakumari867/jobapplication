import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import JobListPage from "./pages/JobListPage";
import JobApplyPage from "./pages/JobApplyPage";
import JobStatusPage from "./pages/JobStatusPage";
import { JobProvider } from "./context/JobContext";

function App() {
  return (
    <JobProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
          
          {/* Navbar */}
          <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
              
              {/* Logo + Brand Name */}
              <Link to="/" className="flex items-center gap-3 group">
                <span className="text-2xl font-extrabold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent tracking-wide">
                  JobPortal
                </span>
              </Link>

              {/* Navigation Links */}
              <div className="flex items-center gap-6">
                <Link
                  to="/"
                  className="text-gray-700 font-medium hover:text-green-600 transition-colors duration-300"
                >
                  Jobs
                </Link>
                <Link
                  to="/status"
                  className="text-gray-700 font-medium hover:text-green-600 transition-colors duration-300"
                >
                  My Applications
                </Link>

         
                <Link to="/">
                  <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                    Post a Job
                  </button>
                </Link>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="p-6">
            <Routes>
              <Route path="/" element={<JobListPage />} />
              <Route path="/apply/:id" element={<JobApplyPage />} />
              <Route path="/status" element={<JobStatusPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </JobProvider>
  );
}

export default App;
