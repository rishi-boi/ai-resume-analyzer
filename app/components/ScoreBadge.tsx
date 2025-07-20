import React from "react";

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge = ({ score }: ScoreBadgeProps) => {
  let badgeStyles: string;
  let label: string;

  if (score > 70) {
    badgeStyles = "bg-badge-green text-green-600";
    label = "Strong";
  } else if (score > 49) {
    badgeStyles = "bg-badge-yellow text-yellow-600";
    label = "Good Start";
  } else {
    badgeStyles = "bg-badge-red text-red-600";
    label = "Needs work";
  }

  return (
    <div className={`score-badge ${badgeStyles}`}>
      <p className="text-sm font-semibold">{label}</p>
    </div>
  );
};

export default ScoreBadge;