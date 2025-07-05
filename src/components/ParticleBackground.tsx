import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Initialize the tsParticles instance
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },            onHover: {
              enable: false, // Disabled mouse hover interaction
              mode: "repulse",
              parallax: {
                enable: false
              }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },            repulse: {
              distance: 75,
              duration: 0.6,
              speed: 0.3,
            },
          },
        },
      particles: {
          color: {
            value: "#ffffff",
          },          shadow: {
            enable: true,
            color: "#ffffff",
            blur: 2, // Reduced blur for smaller bright center
            offset: {
              x: 0,
              y: 0
            }
          },links: {
            color: "#ffffff",
            distance: 150,
            enable: false, // Disabled links between particles
            opacity: 0.08,
            width: 0.5,
          },          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.1, // Even slower movement
            straight: false,          },number: {
            density: {
              enable: true,
              area: 800, // Further decreased area to increase density
            },
            value: 300, // Doubled the number of particles for an even denser starfield
          },opacity: {
            value: 0.8, // Slightly increased opacity for brighter stars
            random: true, // Random opacity for more natural look
            animation: {
              enable: true, // Enable opacity animation for twinkling effect
              speed: 0.2,
              minimumValue: 0.1,
              sync: false
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.5, max: 2 }, // Smaller particles for more realistic stars
            random: true, // Random sizes for variety
          },
        },
        detectRetina: true,
      }}      className="fixed inset-0 w-full h-full z-0"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        transform: 'translateZ(0)', // Hardware acceleration
        WebkitBackfaceVisibility: 'hidden', // Reduce flickering
      }}
    />
  );
}
