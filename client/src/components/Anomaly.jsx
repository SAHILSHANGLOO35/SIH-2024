import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import AnomalyCard from './AnomalyCard';
import AnomalyModal from './AnomalyModal'; // Import the AnomalyModal component

const Anomaly = () => {
  const [anomalies, setAnomalies] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage modal visibility
  
  // Function to fetch anomalies from the API
  const fetchAnomalies = async () => {
    try {
      const response = await fetch('http://localhost:5000/home/anomalies'); // Replace with your actual API URL
      const data = await response.json();
      console.log(data);
      
      // Check if new anomalies are received
      if (data.anomalies && data.anomalies.length > 0) {
        setAnomalies(data.anomalies);
        setIsModalVisible(true); // Show the modal when new anomalies are detected
      }
    } catch (error) {
      console.error("Error fetching anomalies:", error);
    }
  };

  // Fetch anomalies on component mount and then every 2 seconds
  useEffect(() => {
    fetchAnomalies(); // Initial fetch
    const interval = setInterval(fetchAnomalies, 2000); // Polling every 2 seconds
    
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
