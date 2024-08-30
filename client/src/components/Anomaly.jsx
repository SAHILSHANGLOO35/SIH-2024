// Anomaly.jsx
import React from 'react';
import Navbar from './Navbar';
import AnomalyCard from './AnomalyCard';

const anomalies = [
  {
    videoUrl: 'path_to_video_1.mp4',
    date: '2024-08-30',
    description: 'Anomaly detected at street corner.',
  },
  {
    videoUrl: 'path_to_video_2.mp4',
    date: '2024-08-29',
    description: 'Suspicious activity near the park.',
  },
  // Add more anomalies as needed
];

const Anomaly = () => {
  return (
    <>
      <Navbar />
      <div className="py-24 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Anomalies Detected</h1>
        <div className="space-y-6">
          {anomalies.length > 0 ? (
            anomalies.map((anomaly, index) => (
              <AnomalyCard
                key={index}
                videoUrl={anomaly.videoUrl}
                date={anomaly.date}
                description={anomaly.description}
              />
            ))
          ) : (
            <p className="text-gray-500">No anomalies detected.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Anomaly;
