import { useParams, useNavigate } from "react-router-dom";
import { jobsData } from "../jobsData";
import { useState } from "react";
import { useJobs } from "../context/JobContext";

const JobApplyPage = () => {
  const { id } = useParams();
  const job = jobsData.find((j) => j.id === Number(id));
  const { applyForJob } = useJobs();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resumeLink: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyForJob(job, formData);
    navigate("/status");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Apply for <span className="text-blue-600">{job.title}</span>
        </h1>
        <p className="text-center text-gray-500 mb-6">
          at {job.company}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <input
            type="text"
            name="resumeLink"
            placeholder="Resume Link (Google Drive / URL)"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <textarea
            name="message"
            placeholder="Cover Letter / Message"
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md hover:opacity-90 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplyPage;
