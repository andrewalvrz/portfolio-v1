import { useState } from "react";
import ProjectTile from "../components/ProjectTile";

const Projects = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => setModalImage(imageUrl);
  const closeModal = () => setModalImage(null);

  return (
    <section id="projects" className="min-h-screen flex flex-col">
      <h1 className="text-6xl text-center mt-8 mb-20">Projects</h1>
      <div className="flex-1 flex items-start justify-center mb-20">
        <div className="max-w-[1600px] w-full mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

           
           

            <ProjectTile
              title="TAS-GUI"
              description={`

Modernized the UTRGV Rocket Launchers telemetry visualization system, resolving deprecated dependencies and frequent bugs.

## Key Technical Achievements

* Built with Tauri 2.0, utilizing Rust for backend performance and React for frontend
* Integrated high-frequency data handling (up to 100Hz) with asynchronous Rust libraries
* Implemented real-time display of acceleration, altitude, GPS, and data recording

## Impact & Skills Demonstrated

* Delivered a robust platform for real-time telemetry analysis
* Demonstrated proficiency with Vite, Tailwind CSS, and Rust’s async ecosystems
* Showcased strong problem-solving skills by addressing complex data handling challenges
`}
              github="https://github.com/andrewalvrz/tas-gui-v1-1-0"
              labels={["Rust", "Tauri", "Tailwind", "JavaScript", "React"]}
              image="tas-gui.png"
              onImageClick={openModal}
              completion={100}
            />
            <ProjectTile
              title="RAVEN"
              description={`

Rocket Avionics & Vehicle Execution Node
A modular, high-performance flight computing system for launch vehicles, autonomous rovers, and experimental platforms.

## Mission Profile

RAVEN is a student-engineered avionics architecture developed for the 2026 IREC launch campaign. It is designed from the ground up to support modular integration, real-time decision-making, and mission reliability under extreme conditions. The system enables seamless deployment across a range of vehicles—whether rocketing through the stratosphere or navigating off-road terrain.

Built as a successor to the SENTINEL platform, RAVEN expands beyond traditional rocketry into a universal execution framework for unmanned systems.
## Core Objectives

Deterministic real-time flight operations
Modular subsystem development and integration
Autonomous data collection and logging
Hardened communication across vehicle and ground layers
Independent verification and HIL testing of all modules
`}
              github=""
              labels={["Rust", "Tauri", "Tailwind", "JavaScript", "React"]}
              image="raven.gif"
              onImageClick={openModal}
              completion={25}
            />

            <ProjectTile
              title="Portfolio Site"
              description={`

A refresh of my personal portfolio website, emphasizing scalable architecture and modern web development practices.

## Key Technical Achievements

* Built with TypeScript and React for a robust, maintainable codebase
* Styled with Tailwind CSS for efficient, responsive design
* Hosted on Render for reliable and scalable performance
* Integrated dynamic SVG background, and EmailJS for enhanced UX

## Impact & Skills Demonstrated

* Showcased strong front-end development skills with TypeScript
* Gained real-world experience in secure form handling and service integration
* Demonstrated ability to create visually appealing and interactive web experiences
`}
              deploymentUrl=""
              github=""
              labels={["TypeScript", "React", "Tailwind", "Node.js"]}
              image="portfolio.png"
              onImageClick={openModal}
              completion={80}
            />

            <ProjectTile
              title="Portfolio Site v1"
              description={`

My original portfolio site built primarily in HTML/CSS, marking my initial steps into web development.

## Key Technical Achievements

* Employed basic JavaScript for interactive elements
* Learned fundamental web dev practices in styling and layout
* Transitioned to React for code maintainability and scalability

## Impact & Skills Demonstrated

* Established a foundation in front-end web development
* Demonstrated self-motivation to learn and expand technical skill sets
`}
              github="https://github.com/andrewalvrz/my-portfolio"
              labels={["JavaScript", "React", "Node.js"]}
              image="portfolioog.png"
              onImageClick={openModal}
              completion={100}
            />

            

            <ProjectTile
              title="SENTINEL"
              description={`

Next-generation rocket telemetry system for UTRGV Rocket Launchers, building on the TAS-GUI prototype.

## Key Technical Achievements

* Implemented real-time 3D rocket orientation tracking and flight trajectory visualization
* Employed an event-driven architecture for seamless communication between hardware and software
* Leveraged Rust, Tauri, and React for performant, cross-platform data analysis

## Impact & Skills Demonstrated

* Enhanced rocket launches with comprehensive flight monitoring and sensor data analysis
* Demonstrated ability to collaborate on complex, production-ready systems
* Applied lessons from previous projects to improve reliability and performance
`}
              github="https://github.com/andrewalvrz/SENTINEL"
              labels={["Rust", "Tauri", "Tailwind", "JavaScript", "React"]}
              image="sentinel.png"
              onImageClick={openModal}
              completion={100}
            />                      <ProjectTile
              title="B.R.U.N.O"
              description={`

Developed a comprehensive multi-board flight computer system and ground station for advanced rocketry telemetry applications.

## Key Technical Achievements

* Implemented a dual-board architecture with NAVC for sensor data collection and FC for telemetry transmission
* Integrated multiple sensors including IMU, barometer, magnetometer, GPS, and RTC for comprehensive flight data
* Engineered real-time communication protocols between flight computer and ground station using LoRa radio
* Developed automatic parachute deployment system based on altimeter readings

## Impact & Skills Demonstrated

* Applied embedded systems programming in a mission-critical aerospace context
* Designed reliable telemetry systems for high-speed, high-altitude applications
* Leveraged hardware-software integration skills across multiple microcontrollers
* Created systems compatible with advanced visualization software for real-time monitoring
`}
              labels={["C++", "Embedded", "LoRa", "UART", "I2C"]}
              image="/brunito.jpg"
              onImageClick={openModal}
              completion={60}
            />            
            

            
          </div>
        </div>
      </div>
      

      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
          onClick={closeModal}
        >
          <div className="relative w-screen h-screen flex items-center justify-center p-4">
            <img
              src={modalImage}
              alt="Full size preview"
              className="max-w-[95vw] max-h-[95vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
