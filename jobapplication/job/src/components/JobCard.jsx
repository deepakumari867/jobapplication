import { Link } from "react-router-dom";
import { Briefcase, Building2, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const JobCard = ({ job }) => {
  const [arrowClicked, setArrowClicked] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);

  const handleArrowClick = (e) => {
    e.stopPropagation();
    setArrowClicked(true);
    setTimeout(() => setArrowClicked(false), 300);
  };

  return (
    <div
      className={`group relative max-w-md w-full mx-auto rounded-3xl p-[2px] 
        bg-gradient-to-r from-green-300 via-green-200 to-yellow-100 transition-transform duration-500 
        ${!arrowHover ? "hover:scale-105 hover:shadow-xl" : ""} cursor-pointer`}
    >
      <div className="rounded-3xl bg-white p-6 flex flex-col gap-4 shadow-md transition-all duration-500 hover:-translate-y-1 relative">
        
        {/* Icon + Job Title */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-200 via-teal-100 to-green-100 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
            <Briefcase className="w-6 h-6 text-green-700" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-gray-900">{job.title}</h2>
        </div>

        {/* Company + Location */}
        <div className="flex flex-wrap gap-4 text-gray-700 text-sm md:text-base">
          <p className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-green-500" />
            <span className="font-semibold">{job.company}</span>
          </p>
          {job.location && (
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-500" />
              <span>{job.location}</span>
            </p>
          )}
        </div>

        {/* Job Description */}
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
          {job.description}
        </p>

        {/* Apply Button */}
        <div className="mt-auto flex justify-center">
          <Link to={`/apply/${job.id}`} onClick={(e) => e.stopPropagation()}>
            <button className="flex items-center justify-center bg-gradient-to-r from-green-400 via-teal-400 to-green-500 text-white px-6 py-3 rounded-xl font-semibold text-sm md:text-base tracking-wide hover:scale-105 hover:shadow-lg transition-all duration-300">
              Apply Now
            </button>
          </Link>
        </div>

        {/* External Arrow Icon */}
        <div
          onClick={handleArrowClick}
          onMouseEnter={() => setArrowHover(true)}
          onMouseLeave={() => setArrowHover(false)}
          className={`absolute top-1/2 right-[-20px] w-12 h-12 flex items-center justify-center 
            rounded-full bg-green-400 text-white shadow-lg cursor-pointer transition-transform duration-300 
            ${arrowClicked ? "rotate-12 scale-110" : ""}
            ${arrowHover && !arrowClicked ? "scale-110 bg-green-500" : ""}
          `}
        >
          <ArrowRight className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
