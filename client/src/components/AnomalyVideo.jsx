import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

const AnomalyVideo = () => {
  const location = useLocation();
  const { videoUrl, date, description } = location.state || {};
  const handleCallAmbulance = () => {
    // Replace with actual call functionality or link
    alert("Calling Ambulance...");
  };

  const handleCallFacility = () => {
    // Replace with actual call functionality or link
    alert("Calling Facility...");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6 px-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl">
          {/* Main Video Player */}
          <div className="p-4">
            <VideoPlayer videoUrl={`http://localhost:8080/${videoUrl}`} />
          </div>

          {/* Video Info */}
          <div className="p-4 border-t border-gray-200">
            <p className="text-gray-500 text-sm mb-2">{date}</p>
            <p className="text-gray-800 font-semibold text-lg mb-4">{description}</p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleCallAmbulance}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Call Ambulance
              </button>
              <button
                onClick={handleCallFacility}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Call Facility
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnomalyVideo;