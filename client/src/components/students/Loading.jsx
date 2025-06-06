import React from "react";

const Loading = ({ size = "xl", text = "Loading...", fullScreen = true }) => {
  const dotSizes = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
    xl: "w-5 h-5",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const containerClasses = fullScreen
    ? "fixed inset-0 flex flex-col items-center justify-center"
    : "flex flex-col items-center justify-center p-4";

  return (
    <div
      className={containerClasses}
      role="status"
      aria-live="polite"
      aria-label={text}
    >
      <div className="flex space-x-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`${dotSizes[size]} bg-blue-400 rounded-full animate-bounce`}
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: "0.6s",
            }}
          ></div>
        ))}
      </div>

      {text && (
        <p className={`mt-3 ${textSizes[size]} text-gray-400 font-medium`}>
          {text}
        </p>
      )}
      <span className="sr-only">{text}</span>
    </div>
  );
};

export default Loading;
