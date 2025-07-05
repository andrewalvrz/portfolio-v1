import React from 'react';
import { TextTile, PictureTile, TraitTile } from '../components/Tile';

const About: React.FC = () => {
  return (
    <div id="about" className="flex flex-col items-center">
      <div className="flex justify-center w-full mb-20">
        <div className="w-[200px] h-[2px] bg-gray-700 rounded-full"></div>
      </div>
      <img
        src="/profile.jpg"
        alt="Portrait"
        className="w-64 h-64 rounded-full object-cover drop-shadow-lg mb-8 glow-effect"
      />
      <div className="max-w-[1600px] w-full mx-auto px-4">
        <div className="grid grid-cols-1 landscape:grid-cols-2 landscape:justify-center gap-8 items-start">
          <div className="space-y-8 landscape:flex landscape:flex-col max-w-full">
            <div className="landscape:flex-grow max-w-full">
              <TextTile 
                title="About Me" 
                description={
                  <>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <TraitTile 
                        text="Productive"
                        accentColor="emerald"
                        icon={
                          <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                          </svg>
                        }
                      />
                      <TraitTile 
                        text="Self-Learner"
                        accentColor="blue"
                        icon={
                          <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                          </svg>
                        }
                      />
                      <TraitTile 
                        text="Problem Solver"
                        accentColor="purple"
                        icon={
                          <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                          </svg>
                        }
                      />
                    </div>
                    Hello! I'm a software developer based in Penitas, Texas, currently pursuing a Bachelor’s degree in Computer Science at the University of Texas Rio Grande Valley (UTRGV). My journey into technology began at a young age, driven by a passion for problem-solving and creativity. My first experiences with programming involved modding games and building simple websites, sparking a lifelong interest in tech.
two
                    Before transferring to UTRGV, I earned an Associate’s degree in Biology from South Texas College. During this transfer time, I began deepening my understanding of computer hardware and system management and Ultimately decided to pivot my career towards software development. This decision was fueled by my desire to create impactful solutions and contribute to the ever-evolving tech landscape.

                    At UTRGV, I’m an active member of the Rocket Launchers Club as a Software Avionics Lead, where I collaborate with like-minded individuals on exciting aerospace projects. Additionally, I frequently attend hackathons, where I enjoy tackling challenges, learning from peers, and networking with other passionate developers. I value building strong connections within the tech community and sharing knowledge through collaboration and teamwork.

                    I’m passionate about continuous learning and innovation. I love exploring emerging technologies, researching their applications, and integrating them into my projects. Whether it's developing software, solving technical challenges, or diving into new frameworks, I’m always eager to expand my skills and take on new challenges.

                    Feel free to download my resume and explore the gallery below to see highlights from my experiences.
                  </>
                }
                downloadUrl="/resume.pdf"
                downloadLabel="Download Resume"
              />            </div>
            <div className="mt-8">
              <PictureTile
                title="Lonestar Rocket Launch 2025" 
                description="A Photo of Rocket Launch at Lonestar Cup."
                image="/lonestar-rocket.JPG" 
              />
              <PictureTile
                title="Spaceport America Rocket Launch 2025" 
                description="A Photo of Our Rocket Disparado on the Launchpad at Spaceport America Cup."
                image="/Disparado.png" 
              />
              
            </div>
          </div>          <div className="space-y-8 landscape:flex landscape:flex-col">
            <div className="grid grid-cols-1 gap-8">
              <div className="landscape:flex-shrink-0">
                <PictureTile 
                  title="Lonestar Rocketry 2025" 
                  description="Team picture at Lonestar Rocketry 2025 competition"
                  image="/lonestar2025.jpg"
                />
              </div>
              <div className="landscape:flex-shrink-0">
                <PictureTile 
                  title="SpaceX Starbase Tour 2025" 
                  description="Team picture at SpaceX Starbase"
                  image="/starbase.jpg"
                />
                </div>
              <div className="landscape:flex-shrink-0">
                <PictureTile 
                  title="UTRGV Rocket Launchers Club"
                  description="Avionics team at UTRGV Rocket Launchers Club"
                  image="/avionics.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
