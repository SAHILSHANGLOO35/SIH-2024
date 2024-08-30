import React from "react";
import Navbar from "./Navbar";

const Anamoly = () => {
  const handleWatchClick = (videoUrl) => {
    window.open(videoUrl, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="py-24 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Anomalies Detected</h1>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-4 flex items-start space-x-4">
            {/* Video Preview */}
            <div className="flex-shrink-0">
              <video
                src="path_to_video_1.mp4" // Add video URL or path
                className="w-32 h-20 object-cover rounded"
                controls
              />
            </div>
            {/* Date and Description */}
            <div className="flex-1">
              <p className="text-gray-500 text-sm">2024-08-30</p>
              <p className="text-gray-800 font-semibold text-lg mb-4">
                Anomaly detected at street corner.
              </p>
              <button
                onClick={() => handleWatchClick("path_to_video_1.mp4")}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Watch Full Video
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 flex items-start space-x-4">
            {/* Video Preview */}
            <div className="flex-shrink-0">
              <video
                src="path_to_video_2.mp4" // Add video URL or path
                className="w-32 h-20 object-cover rounded"
                controls
              />
            </div>
            {/* Date and Description */}
            <div className="flex-1">
              <p className="text-gray-500 text-sm">2024-08-29</p>
              <p className="text-gray-800 font-semibold text-lg mb-4">
                Suspicious activity near the park.
              </p>
              <button
                onClick={() => handleWatchClick("path_to_video_2.mp4")}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Watch Full Video
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-4 flex items-start space-x-4">
              {/* Video Preview */}
              <div className="flex-shrink-0">
                <video
                  src="path_to_video_1.mp4" // Add video URL or path
                  className="w-32 h-20 object-cover rounded"
                  controls
                />
              </div>
              {/* Date and Description */}
              <div className="flex-1">
                <p className="text-gray-500 text-sm">2024-08-30</p>
                <p className="text-gray-800 font-semibold text-lg mb-4">
                  Anomaly detected at street corner.
                </p>
                <button
                  onClick={() => handleWatchClick("path_to_video_1.mp4")}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  Watch Full Video
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 flex items-start space-x-4">
              {/* Video Preview */}
              <div className="flex-shrink-0">
                <video
                  src="path_to_video_2.mp4" // Add video URL or path
                  className="w-32 h-20 object-cover rounded"
                  controls
                />
              </div>
              {/* Date and Description */}
              <div className="flex-1">
                <p className="text-gray-500 text-sm">2024-08-29</p>
                <p className="text-gray-800 font-semibold text-lg mb-4">
                  Suspicious activity near the park.
                </p>
                <button
                  onClick={() => handleWatchClick("path_to_video_2.mp4")}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  Watch Full Video
                </button>
              </div>
            </div>

            {/* Add more blocks as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Anamoly;