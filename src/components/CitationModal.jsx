import React from "react";

function CitationModal({ citation, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-4xl p-4 rounded shadow relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-2">{citation.source}</h2>
        <p className="mb-3">{citation.text}</p>
       <a
  href={citation.link}
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 underline"
>
  Open PDF in New Tab
</a>
        <p className="mt-2 text-sm text-gray-600">
          *Simulated scroll to paragraph 7. Please view the document manually for precise location.
        </p>
      </div>
    </div>
  );
}

export default CitationModal;
