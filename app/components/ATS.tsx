import React from "react";

interface Suggestion {
  type: "good" | "improve";
  tip: string;
}

interface ATSProps {
  score: number;
  suggestions: Suggestion[];
}

const ATS = ({ score, suggestions }: ATSProps) => {
  let gradientClass: string;
  let iconSrc: string;
  let title: string;

  if (score > 70) {
    gradientClass = "from-green-100";
    iconSrc = "/icons/ats-good.svg";
    title = "Great ATS Score!";
  } else if (score > 49) {
    gradientClass = "from-yellow-100";
    iconSrc = "/icons/ats-warning.svg";
    title = "Good Start, But Room to Improve";
  } else {
    gradientClass = "from-red-100";
    iconSrc = "/icons/ats-bad.svg";
    title = "Needs Significant Improvement";
  }

  return (
    <div
      className={`bg-gradient-to-b ${gradientClass} to-white rounded-2xl shadow-md w-full p-6 flex flex-col gap-4`}
    >
      <div className="flex items-center gap-4">
        <img src={iconSrc} alt="ATS score icon" className="w-12 h-12" />
        <div>
          <h3 className="text-2xl font-bold text-black">
            ATS Score: {score}/100
          </h3>
          <p className="text-lg text-gray-600">{title}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-xl font-semibold">What this means</h4>
        <p className="text-gray-500">
          An Applicant Tracking System (ATS) is used by many companies to filter
          resumes. A higher score means your resume is more likely to pass these
          initial screenings.
        </p>

        <ul className="space-y-2">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start gap-2">
              <img
                src={
                  suggestion.type === "good"
                    ? "/icons/check.svg"
                    : "/icons/warning.svg"
                }
                alt={suggestion.type}
                className="w-5 h-5 mt-1"
              />
              <p className="text-gray-700">{suggestion.tip}</p>
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-500 mt-4">
          Keep improving your resume to increase your chances of landing an
          interview!
        </p>
      </div>
    </div>
  );
};

export default ATS;
