import { Typewriter } from 'react-simple-typewriter';
import '../index.css'; // Import the global CSS file

const Home = () => {
  return (
    <div id="home" className="relative flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl px-4">
        <h2 className="text-1xl md:text-1xl lg:text-2xl font-normal tracking-normal md:tracking-normal lg:tracking-normal text-left text-white">
          Hi! 👋, My name is
        </h2>
        <h1 className="text-6xl md:text-6xl lg:text-8xl font-normal tracking-normal md:tracking-normal lg:tracking-normal gradient-text pb-4 leading-normal text-left">
          Andrew Alvarez
        </h1>
        <div className="relative h-[200px]">
          <div className="absolute w-full">
            <h1 className="text-2xl md:text-2xl lg:text-4xl font-normal tracking-normal md:tracking-normal lg:tracking-normal text-white pb-4 leading-normal text-left">
              <Typewriter
                words={[
                  'Full Stack Developer', 
                  'Embedded Developer',
                  'Student',
                  'Tech Enthusiast',
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={20}
                delaySpeed={2000} // Increased delay between messages
              />
            </h1>
          </div>
        </div>
      </div>
      <div className="relative arrow-container mb-0 pb-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          version="1.1" 
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 800 800"
          className="arrow"
        >
          <g 
            strokeWidth="9" 
            stroke="hsl(0, 0%, 100%)" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            transform="rotate(45, 400, 400)"
          >
            <line 
              x1="372.5" 
              y1="372.5" 
              x2="427.5" 
              y2="427.5" 
              markerEnd="url(#SvgjsMarker2406)"
            />
          </g>
          <defs>
            <marker 
              markerWidth="6.5" 
              markerHeight="6.5" 
              refX="3.25" 
              refY="3.25" 
              viewBox="0 0 6.5 6.5" 
              orient="auto" 
              id="SvgjsMarker2406"
            >
              <polygon 
                points="0,6.5 3.25,3.25 0,0 6.5,3.25" 
                fill="hsl(0, 0%, 100%)"
              />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Home;
