import { jobsData } from "../jobsData";
import JobCard from "../components/JobCard";
import HeroSection from "../components/HeroSection";

const JobListPage = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Available Jobs
      </h1>

      {jobsData.length === 0 ? (
        <div className="bg-white shadow-md rounded-lg p-6 text-center text-gray-500 max-w-md mx-auto">
          <p className="text-lg">No jobs available right now </p>
          <p className="text-sm text-gray-400">
            Please check back later for new opportunities.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {jobsData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobListPage;
