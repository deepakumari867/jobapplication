import { motion } from "framer-motion";
import { Briefcase, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  // Positions for floating small icons on right side
  const rightFloating = [
    { top: "10%", right: "-20px", size: 8, delay: 0 },
    { top: "40%", right: "-40px", size: 10, delay: 1 },
    { top: "70%", right: "-25px", size: 6, delay: 2 },
  ];

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-[-120px] left-[-80px] w-[250px] h-[250px] bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-[-80px] w-[250px] h-[250px] bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="flex items-center gap-2 bg-green-100 w-fit px-4 py-1 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-green-700" />
            <span className="text-green-800 text-sm font-medium">Find Your Dream Job</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Unlock Endless <span className="text-green-600">Career Opportunities</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-lg">
            Discover the latest jobs from top companies, apply instantly, and track your applications effortlessly — all in one place.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-lg flex items-center gap-3 p-2 border border-gray-200 max-w-md mb-6">
            <Search className="w-5 h-5 text-gray-400 ml-3" />
            <input
              type="text"
              placeholder="Search job titles or companies..."
              className="flex-1 py-2 px-2 outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
            />
            <Link to="/jobs">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#16A34A" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-5 py-2 rounded-lg shadow flex items-center gap-1 text-sm sm:text-base transition-all"
              >
                Search
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/jobs">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(22, 163, 74, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-transform duration-300 w-full sm:w-auto"
              >
                Explore Jobs
              </motion.button>
            </Link>
            <Link to="/status">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(22, 163, 74, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-green-300 text-green-600 px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg hover:bg-green-50 transition duration-300 w-full sm:w-auto"
              >
                Track Applications
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative flex justify-center lg:justify-end"
        >
          {/* Main Illustration */}
          <motion.img
            src="https://img.freepik.com/free-vector/flat-design-office-printer-illustration_23-2150268487.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Job Search"
            className="max-w-xs sm:max-w-md lg:max-w-lg drop-shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />

          {/* Small Floating Images (Draggable + Hover Bounce) */}
          {rightFloating.map((icon, i) => (
            <motion.img
              key={i}
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Job Icon"
              className="absolute w-6 sm:w-8 opacity-70 cursor-pointer"
              style={{ top: icon.top, right: icon.right }}
              drag
              dragConstraints={{ top: -10, bottom: 10, left: -10, right: 10 }}
              whileHover={{ scale: 1.2, rotate: 15, y: -5 }}
              whileTap={{ scale: 0.9, rotate: -10 }}
              animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 + i, delay: icon.delay }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
