import { createContext, useContext, useState } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);

  const applyForJob = (job, formData) => {
    const newApplication = {
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      name: formData.name,
      email: formData.email,
      resumeLink: formData.resumeLink || "",
      message: formData.message,
      appliedAt: new Date().toISOString(),
      status: "Pending"
    };
    setApplications([...applications, newApplication]);
  };

  return (
    <JobContext.Provider value={{ applications, applyForJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => useContext(JobContext);
