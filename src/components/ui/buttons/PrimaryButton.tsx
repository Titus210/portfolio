import React from 'react';

interface PrimaryButtonProps {
  text: string;
  color: string; // Accepts a color string like 'text-red-500'
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, color }) => {
  // Generate a Tailwind CSS class based on the color prop
  const textColorClass = `text-${color}`;

  return (
    <div className="rounded-md shadow">
      <button className={`w-full px-4 py-2 bg-primary ${textColorClass} font-semibold rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-opacity-50`}>
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
