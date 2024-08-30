import React from "react";
import Navbar from "./Navbar";

const AnamolyVideo = ({ videoUrl, date, description }) => {
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
          <div className="relative w-full h-0" style={{ paddingTop: '56.25%' }}>
            <iframe
              src={videoUrl}
              className="absolute top-0 left-0 w-full h-full rounded-t-lg"
              frameBorder="0"
              allowFullScreen
              title="Anomaly Video"
            ></iframe>
          </div>
          {/* Video Info */}
          <div className="p-4">
            <p className="text-gray-500 text-sm mb-2">{date}</p>
            <p className="text-gray-800 font-semibold text-lg mb-4">{description}</p>
            <div className="flex space-x-4">
              <button
                onClick={handleCallAmbulance}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
              >
                Call Ambulance
              </button>
              <button
                onClick={handleCallFacility}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
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

export default AnamolyVideo;