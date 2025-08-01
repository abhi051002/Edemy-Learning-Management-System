import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";
import Footer from "../../components/students/Footer";
import Rating from "../../components/students/Rating";

const Player = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [playerData, setPlayerData] = useState(null);
  const [openSections, setOpenSections] = useState({});

  const { enrolledCourses, calculateChapterTime } = useContext(AppContext);

  const getCourseData = async () => {
    enrolledCourses.map((course) => {
      if (course._id === courseId) {
        setCourseData(course);
      }
    });
  };

  const toggleSection = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // YouTube player options to prevent layout issues
  const youtubeOpts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  useEffect(() => {
    getCourseData();
  }, [courseId, enrolledCourses]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1">
        <div className="p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36">
          {/* Left Column */}
          <div className="text-gray-800">
            <h2 className="text-xl font-semibold">Course Structure</h2>
            <div className="pt-5">
              {courseData &&
                courseData?.courseContent.map((chapter, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 bg-white mb-2 rounded"
                  >
                    <div
                      className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={assets.down_arrow_icon}
                          alt="down_array_icon"
                          className={`transform transition-transform ${
                            openSections[index] ? "rotate-180" : ""
                          }`}
                        />
                        <p className="text-sm md:text-base font-medium">
                          {chapter.chapterTitle}
                        </p>
                      </div>
                      <p className="text-sm md:text-base">
                        {chapter.chapterContent.length} lectures -{" "}
                        {calculateChapterTime(chapter)}
                      </p>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openSections[index] ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <ul className="list-disc md:pl-10 px-4 py-2 text-gray-600 border-t border-gray-300">
                        {chapter.chapterContent.map((lecture, lectureIndex) => (
                          <li
                            key={lectureIndex}
                            className="flex items-start gap-2 py-1"
                          >
                            <img
                              src={
                                false ? assets.blue_tick_icon : assets.play_icon
                              }
                              alt={false ? "blue_tick_icon" : "play_icon"}
                              className="w-4 h-4 mt-1"
                            />
                            <div className="flex items-center justify-between w-full text-gray-800 text-sm md:text-default">
                              <p>{lecture.lectureTitle}</p>
                              <div className="flex gap-2">
                                {lecture.lectureUrl && (
                                  <p
                                    className="text-blue-500 cursor-pointer"
                                    onClick={() => {
                                      setPlayerData({
                                        ...lecture,
                                        chapter: index + 1,
                                        lecture: lectureIndex + 1,
                                      });
                                      scrollTo(0, 0);
                                    }}
                                  >
                                    Watch
                                  </p>
                                )}
                                <p>
                                  {humanizeDuration(
                                    lecture.lectureDuration * 60 * 1000,
                                    { units: ["h", "m"] }
                                  )}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex items-center gap-2 py-3 mt-10">
              <h1 className="text-xl font-bold">Rate this course:</h1>
              <Rating initailRating={0} />
            </div>
          </div>

          {/* Right Column */}
          <div className="md:mt-10">
            {playerData ? (
              <div className="w-full">
                <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
                  <YouTube
                    videoId={playerData.lectureUrl.split("/").pop()}
                    opts={youtubeOpts}
                    className="absolute inset-0 w-full h-full"
                    iframeClassName="w-full h-full"
                  />
                </div>
                <div className="flex justify-between items-center mt-4 px-2">
                  <p className="text-sm md:text-base font-medium">
                    {playerData.chapter}.{playerData.lecture}{" "}
                    {playerData.lectureTitle}
                  </p>
                  <button className="text-blue-600 cursor-pointer text-sm md:text-base hover:underline">
                    {false ? "Completed" : "Mark as Complete"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full">
                {courseData && (
                  <img
                    src={courseData.courseThumbnail}
                    alt="courseThumbnail"
                    className="w-full aspect-video object-cover rounded-lg"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Player;
