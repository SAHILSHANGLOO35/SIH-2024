import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import AnomalyCard from './AnomalyCard';
import AnomalyModal from './AnomalyModal';

const Anomaly = () => {
  const [anomalies, setAnomalies] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to fetch all anomalies initially
  const fetchAllAnomalies = async () => {
    try {
      const response = await fetch('http://localhost:5000/home/all-anomalies'); // API to fetch all anomalies
      const data = await response.json();
      console.log('All anomalies:', data);
      setAnomalies(data.anomalies);
    } catch (error) {
      console.error("Error fetching all anomalies:", error);
    }
  };

  // Function to fetch new anomalies from the API
  const fetchNewAnomalies = async () => {
    try {
      const response = await fetch('http://localhost:5000/home/anomalies'); // API to fetch only new anomalies
      const data = await response.json();
      console.log('New anomalies:', data);

      // Check if new anomalies are received
      if (data.anomalies && data.anomalies.length > 0) {
        setAnomalies(data.anomalies);
        setIsModalVisible(true); // Show the modal when new anomalies are detected
      }
    } catch (error) {
      console.error("Error fetching new anomalies:", error);
    }
  };

  useEffect(() => {
    // Initial fetch of all anomalies
    fetchAllAnomalies();

    // Set up polling to fetch new anomalies every 2 seconds
    const interval = setInterval(fetchNewAnomalies, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Function to handle modal close
  const handleModalClose = () => {
    setIsModalVisible(false); // Close the modal
  };

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
                videoUrl={anomaly.path}
                date={anomaly.dateTime}
                description={anomaly.description}
              />
            ))
          ) : (
            <p className="text-gray-500">No anomalies detected.</p>
          )}
        </div>
      </div>

      {/* Render AnomalyModal when isModalVisible is true */}
      {isModalVisible && <AnomalyModal onClose={handleModalClose} />}
    </>
  );
};

export default Anomaly;
