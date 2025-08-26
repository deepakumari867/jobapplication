import { useJobs } from "../context/JobContext";

const JobStatusPage = () => {
  const { applications } = useJobs();

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "accepted":
        return "bg-green-100 text-green-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Your Applications
      </h1>

      {applications.length === 0 ? (
        <div className="bg-white shadow-md rounded-lg p-6 text-center text-gray-500 max-w-sm mx-auto">
          <p className="text-lg">No applications yet </p>
          <p className="text-sm text-gray-400">
            Start applying to jobs and track your progress here.
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-5">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300 w-[250px]"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {app.jobTitle}
                </h2>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                    app.status
                  )}`}
                >
                  {app.status}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-1 truncate">
                {app.company}
              </p>
              <p className="text-xs text-gray-500">
                Applied At:{" "}
                <span className="font-medium text-gray-700">
                  {new Date(app.appliedAt).toLocaleDateString()}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobStatusPage;
