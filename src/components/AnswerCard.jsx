import React, { useState } from "react";
import CitationModal from "./CitationModal";

function AnswerCard({ response }) {
  const [selectedCitation, setSelectedCitation] = useState(null);

  return (
    <div className="bg-white shadow p-4 rounded">
      <h3 className="text-lg font-semibold mb-2">Answer</h3>
      <p>{response.answer}</p>

      <h4 className="mt-4 font-semibold">Citations</h4>
      <ul className="list-disc pl-5">
        {response.citations.map((cite, index) => (
          <li key={index} className="mt-2">
            <button
              onClick={() => setSelectedCitation(cite)}
              className="text-blue-600 underline hover:text-blue-800"
            >
              {cite.text}
            </button>
          </li>
        ))}
      </ul>

      {selectedCitation && (
        <CitationModal
          citation={selectedCitation}
          onClose={() => setSelectedCitation(null)}
        />
      )}
    </div>
  );
}

export default AnswerCard;
