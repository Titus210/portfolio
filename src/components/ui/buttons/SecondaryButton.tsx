import React from 'react';

interface PrimaryButtonProps {
  text: string;
  color: string; // Accepts a color string like 'text-red-500'
}

const SecondaryButton: React.FC<PrimaryButtonProps> = ({ text, color }) => {
  
  const textColorClass = `text-${color}`;

  return (
    <div className="rounded-md shadow">
      <button className={`w-full px-4 py-2 bg-inherit border ${textColorClass} font-semibold rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-opacity-50`}>
        {text}
      </button>
    </div>
  );
};

export default SecondaryButton;
