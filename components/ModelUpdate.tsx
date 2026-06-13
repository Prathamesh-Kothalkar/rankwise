// src/components/ModelUpdateModal.jsx

import React, { useEffect, useState } from "react";
import { Ban, X } from "lucide-react";

const STORAGE_KEY = "model-update-modal-seen";

function ModelUpdateModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem(STORAGE_KEY);

    if (true) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    //localStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-xl rounded-2xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 transition"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="rounded-full bg-orange-100 p-4">
            <Ban size={40} className="text-orange-500" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-5 text-center text-2xl font-bold text-gray-900">
          Data is in Progress
        </h2>

        {/* Description */}
        <p className="mt-4 text-center text-gray-600 leading-7">
          We are currently updating our data with the latest
          admission data to provide more accurate college predictions.
        </p>

        <p className="mt-2 text-center text-gray-600 leading-7">
          Data processing, validation, and uploading are currently underway and
          may take approximately <strong>2–3 days</strong>.
        </p>

        <p className="mt-2 text-center text-gray-600 leading-7">
          Thank you for your patience. Stay tuned for an improved experience.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleClose}
            className="rounded-lg  px-6 py-3 font-medium text-white transition bg-[#0F766E] hover:bg-[#0e665f]"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModelUpdateModal;