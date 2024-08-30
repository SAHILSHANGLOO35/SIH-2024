import React, { useEffect, useRef } from 'react';
import { AiOutlineWarning } from 'react-icons/ai'; // Importing a warning icon

const AnomalyModal = ({ onClose }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Function to play audio when the component mounts
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
      }
    };

    playAudio(); // Attempt to play audio immediately when the modal mounts

    // Cleanup function to stop audio when the component unmounts or is dismissed
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset audio to the beginning
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
      <div className="bg-white rounded-lg shadow-2xl w-96 p-8 text-center">
        {/* Warning Icon */}
        <div className="mb-6">
          <AiOutlineWarning className="text-red-600 text-5xl mx-auto animate-pulse" />
        </div>
        
        {/* Anomaly Text */}
        <h2 className="text-2xl font-bold text-red-700 mb-2">Danger Alert!</h2>
        <p className="text-gray-700 text-lg mb-4">An anomaly has been detected. Immediate action may be required.</p>
        
        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button 
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
            onClick={onClose} // Call onClose to handle dismiss action
          >
            Dismiss
          </button>
        </div>
        
        {/* Warning Audio */}
        <audio ref={audioRef} src="/siren.mp3" preload="auto" loop />
      </div>
    </div>
  );
};

export default AnomalyModal;
