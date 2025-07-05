import React from 'react';

interface TextTileProps {
  title: string;
  description: React.ReactNode;  // Change from string to ReactNode
  downloadUrl?: string;  // Optional download URL
  downloadLabel?: string;  // Optional download button label
  icon?: React.ReactNode;  // Add this line
}

interface PictureTileProps {
  title: string;
  description: string;
  image: string;
}

interface TraitTileProps {
  text: string;
  icon: React.ReactNode;
  accentColor: string;  // For text and icon color (e.g., 'cyan', 'emerald', etc.)
  backgroundColor?: string; // Optional background color override
  textSize?: 'sm' | 'base' | 'lg';  // Configurable text size
}

const TextTile: React.FC<TextTileProps> = ({ title, description, downloadUrl, downloadLabel, icon }) => {
  return (
    <div className="base-tile">
      {icon && <div className="flex justify-center mb-4 text-white">{icon}</div>}
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="text-lg">{description}</div>
      {downloadUrl && (
        <div className="mt-6">
          <a 
            href={downloadUrl}
            download
            className="download-button-border inline-flex items-center mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {downloadLabel || 'Download'}
          </a>
        </div>
      )}
    </div>
  );
};

const PictureTile: React.FC<PictureTileProps> = ({ title, description, image }) => {
  return (
    <div className="base-tile">
      <div className="mb-4 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-contain"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
};

const TraitTile: React.FC<TraitTileProps> = ({ 
  text, 
  icon, 
  accentColor, 
  textSize = 'sm' 
}) => {
  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; hover: string } } = {
      'emerald': { 
        bg: 'bg-emerald-500/20', 
        text: 'text-emerald-300', 
        border: 'border-emerald-500/30',
        hover: 'hover:bg-emerald-500/30'
      },
      'blue': { 
        bg: 'bg-blue-500/20', 
        text: 'text-blue-300', 
        border: 'border-blue-500/30',
        hover: 'hover:bg-blue-500/30'
      },
      'purple': { 
        bg: 'bg-purple-500/20', 
        text: 'text-purple-300', 
        border: 'border-purple-500/30',
        hover: 'hover:bg-purple-500/30'
      }
    };

    return colorMap[color] || colorMap['emerald'];
  };

  const colors = getColorClasses(accentColor);
  const textSizeClass = `text-${textSize}`;

  return (
    <div className={`
      inline-flex items-center gap-2 
      px-3 py-2 
      rounded-full 
      border 
      transition-colors duration-300
      w-fit
      ${colors.bg}
      ${colors.border}
      ${colors.hover}
    `}>
      <span className={`${colors.text} flex-shrink-0`}>
        {icon}
      </span>
      <span className={`${colors.text} ${textSizeClass} font-medium whitespace-nowrap`}>
        {text}
      </span>
    </div>
  );
};

export { TextTile, PictureTile, TraitTile };
