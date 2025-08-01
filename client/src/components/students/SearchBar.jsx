import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const SearchBar = ({ data }) => {
  const { navigate } = useContext(AppContext);
  const [input, setInput] = useState(data ? data : "");
  const onSearchHandler = (e) => {
    e.preventDefault();
    input && navigate(`/course-list/${input}`);
  };
  useEffect(() => {
    setInput(data ? data : "");
  }, [data]);

  return (
    <form
      action=""
      onSubmit={onSearchHandler}
      className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded"
    >
      <img
        src={assets.search_icon}
        alt="Search Icon"
        className="md:w-auto w-10 px-3"
      />
      <input
        type="text"
        placeholder="Search for Courses"
        className="w-full h-full outline-none text-gray-500/80"
        value={input}
        required
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 rounded text-white md:px-10 px-7 cursor-pointer md:py-3 py-2 mx-1"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
