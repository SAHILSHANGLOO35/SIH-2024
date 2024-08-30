// AnomalyCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnomalyCard = ({ videoUrl, date, description }) => {
  const navigate = useNavigate();

  const handleWatchClick = () => {
    navigate(`/anomaly-video/${videoUrl}`, {
      state: {
        videoUrl,
        date,
        description,
      },
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-start space-x-4">
      {/* Video Preview */}
      <div className="flex-shrink-0">
        <video
          src={videoUrl} // Use video URL passed as a prop
          className="w-32 h-20 object-cover rounded"
          controls
        />
      </div>
      {/* Date and Description */}
      <div className="flex-1">
        <p className="text-gray-500 text-sm">{date}</p>
        <p className="text-gray-800 font-semibold text-lg mb-4">
          {description}
        </p>
        <button
          onClick={handleWatchClick}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Watch Full Video
        </button>
      </div>
    </div>
  );
};

export default AnomalyCard;
