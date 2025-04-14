import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const isCourseListPage = location.pathname.includes("/course-list");
  return (
    <div
      className={`flex justify-between items-center px-4 sm:px-10 mdLpx-14 lg:px-36 border-b border-gray-400 py-4 ${isCourseListPage ? "bg-white" : "bg-cyan-100/70"
        }`}
    >
      <img
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />
      {/* Content for Desktop View */}
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          <button>Become Educator</button>|{" "}
          <Link to={"/my-enrollments"}>My Enrollnments</Link>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
          Create Account
        </button>
      </div>
      {/* Content for Mobile View */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div>
          <button>Become Educator</button>|{" "}
          <Link to={"/my-enrollments"}>My Enrollnments</Link>
        </div>
        <button>
          <img src={assets.user_icon} alt="User Icon" />
        </button>
      </div>
    </div>
  );
};
