import React, { useState } from "react";
import QueryInput from "./components/QueryInput";
import AnswerCard from "./components/AnswerCard";
import "./index.css";
/*export default function App() {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <h1 className='text-3xl font-bold text-blue-600'>Tailwind is working!</h1>
    </div>
  );
}*/
function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuerySubmit = async (query) => {
    setLoading(true);

    // Simulated API response
    const simulatedResponse = {
      answer:
        "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
      citations: [
        {
          text: "As the age of the deceased at the time of accident was held to be about 54–55 years... 10% of annual income should have been awarded on account of future prospects. (Para 7)",
          source: "Dani_Devi_v_Pritam_Singh.pdf",
          link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
        },
      ],
    };

    // Simulate network delay
    setTimeout(() => {
      setResponse(simulatedResponse);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className='min-h-screen bg-gray-100 p-6 flex flex-col items-center'>
      <div className='w-full max-w-2xl'>
        <QueryInput onSubmit={handleQuerySubmit} loading={loading} />
        {response && <AnswerCard response={response} />}
      </div>
    </div>
  );
}

export default App;
