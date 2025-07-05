import { memo, useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface ProjectTileProps {
  title: string;
  description: string;
  deploymentUrl?: string; // Changed from link to deploymentUrl and made optional
  github?: string; // Add optional GitHub link
  labels: string[];
  image?: string; // Optional image URL
  onImageClick: (imageUrl: string) => void;
  completion: number; // Add completion percentage
}

const getLabelColors = (label: string) => {  const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
    'React': { bg: 'bg-cyan-500/20', text: 'text-cyan-300', border: 'border-cyan-500/30' },
    'JavaScript': { bg: 'bg-yellow-500/20', text: 'text-yellow-300', border: 'border-yellow-500/30' },
    'TypeScript': { bg: 'bg-blue-500/20', text: 'text-blue-300', border: 'border-blue-500/30' },
    'Rust': { bg: 'bg-orange-500/20', text: 'text-orange-300', border: 'border-orange-500/30' },
    'Python': { bg: 'bg-gradient-to-r from-blue-500/20 to-yellow-500/20', text: 'text-yellow-300', border: 'border-blue-500/30' },
    'Tailwind': { bg: 'bg-cyan-500/20', text: 'text-cyan-300', border: 'border-cyan-500/30' },
    'Node.js': { bg: 'bg-emerald-500/20', text: 'text-emerald-300', border: 'border-emerald-500/30' },
    'C#': { bg: 'bg-fuchsia-500/20', text: 'text-fuchsia-300', border: 'border-fuchsia-500/30' },
    'AI': { bg: 'bg-violet-500/20', text: 'text-violet-300', border: 'border-violet-500/30' },
    'ASP.NET': { bg: 'bg-purple-500/20', text: 'text-purple-300', border: 'border-purple-500/30' },
    'Postgres': { bg: 'bg-blue-500/20', text: 'text-blue-300', border: 'border-blue-500/30' },
    'SQL': { bg: 'bg-green-500/20', text: 'text-green-300', border: 'border-green-500/30' },
    'Flutter': { bg: 'bg-sky-500/20', text: 'text-sky-300', border: 'border-sky-500/30' },
    'Dart': { bg: 'bg-teal-500/20', text: 'text-teal-300', border: 'border-teal-500/30' },
    'Tauri': { bg: 'bg-slate-500/20', text: 'text-slate-300', border: 'border-slate-500/30' },
    'Embedded': { bg: 'bg-lime-500/20', text: 'text-lime-300', border: 'border-lime-500/30' },
    'Ruby': { bg: 'bg-red-600/20', text: 'text-red-300', border: 'border-red-500/30' },
    'Ruby on Rails': { bg: 'bg-gradient-to-r from-red-500/20 to-white/20', text: 'text-red-300', border: 'border-red-600/30' },
  };

  return colorMap[label] || { bg: 'bg-indigo-500/20', text: 'text-indigo-300', border: 'border-indigo-500/30' };
};

const ProjectTile = memo(({ title, description, deploymentUrl, github, labels, image, onImageClick, completion }: ProjectTileProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowMore, setShouldShowMore] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkHeight = () => {
      if (textRef.current && containerRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const textHeight = textRef.current.scrollHeight;
        
        // If text height is greater than 4 lines (considering line height)
        setShouldShowMore(textHeight > containerHeight);
      }
    };

    checkHeight();
    // Recheck on window resize
    window.addEventListener('resize', checkHeight);
    return () => window.removeEventListener('resize', checkHeight);
  }, [description]);

  const progressColor = completion === 100 ? 'bg-green-500/60' : 'bg-amber-400/60';
  const progressBorderColor = completion === 100 ? 'border-green-500/90' : 'border-amber-400/90';

  return (
    <div className="base-tile flex flex-col h-full">
      {image ? (
        <div className="mb-4 overflow-hidden rounded-lg aspect-video">
          <img 
            src={image} 
            alt={`${title} preview`}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 cursor-pointer"
            loading="lazy"
            decoding="async"
            width="800"
            height="450"
            onClick={() => onImageClick(image)}
            style={{
              imageRendering: '-webkit-optimize-contrast',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          />
        </div>
      ) : null}
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className={`relative w-full h-4 mb-4 bg-white/10 rounded-full overflow-hidden border-2 ${progressBorderColor}`}>
        <div className={`absolute top-0 left-0 h-full ${progressColor}`} style={{ width: `${completion}%` }}>
          {completion < 100 && <div className="wave-effect h-full"></div>}
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-sm text-white">
          {completion < 100 ? 'In Progress' : 'Completed'}
        </div>
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-white/20"></div>
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/20"></div>
        <div className="absolute top-0 left-3/4 w-0.5 h-full bg-white/20"></div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {labels.map((label, index) => {
          const colors = getLabelColors(label);
          return (
            <span
              key={index}
              className={`px-2 py-1 text-sm rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
            >
              {label}
            </span>
          );
        })}
      </div>
      
      <div className="relative flex-grow">
        <div ref={containerRef} className={`${isExpanded ? '' : 'max-h-[6em] overflow-hidden'}`}>
          <div ref={textRef} className="mb-4 prose prose-invert prose-sm max-w-none">
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        </div>
        {shouldShowMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
          >
            {isExpanded ? 'See less' : 'See more'}
          </button>
        )}
      </div>

      <div className="flex justify-between items-center mt-4">
        <div>
          {deploymentUrl && (
            <button 
              onClick={() => window.open(deploymentUrl, '_blank')} 
              className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-md text-blue-300 hover:bg-blue-500/30 transition-all duration-300 flex items-center gap-2"
            >
<svg
  className="w-5 h-5 animate-[spin_3s_linear_infinite]"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>

  <circle cx="12" cy="12" r="10" />
  
  <path d="M2 12h20" />
  

  <path d="
    M12 2
    a15.3 15.3 0 0 1 4 10
    a15.3 15.3 0 0 1 -4 10
    a15.3 15.3 0 0 1 -4 -10
    a15.3 15.3 0 0 1 4 -10
    z
  "/>
</svg>

              Live Deployment
            </button>
          )}
        </div>
        {github && (
          <a href={github} className="text-gray-400 hover:text-gray-300 transition-colors ml-auto" aria-label="View on GitHub">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
});

ProjectTile.displayName = 'ProjectTile';

export default ProjectTile;
