import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the slim version to optimize performance.
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Changed to transparent to not interfere with hero section
        },
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 50, // Number of particles
          density: {
            enable: true,
            area: 800, // Adjust for responsiveness
          },
        },
        color: {
          value: ["#FFB6C1", "#FFC0CB", "#FF69B4"], // Sakura petal pink colors
        },
        opacity: {
          value: 0.8,
          random: true,
        },
        size: {
          value: { min: 2, max: 6 }, // Slightly larger for visible sakura petals
          random: true,
        },
        move: {
          direction: "bottom", // Petals falling down
          enable: true,
          outModes: {
            default: "out",
          },
          speed: 0.5, // Gentle falling speed
        },
        shape: {
          type: "circle", // Sakura petals as circular shapes
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    init && (
      <Particles
        id={props.id}
        init={particlesLoaded}
        options={options}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          pointerEvents: 'none', // Ensure particles don't interfere with interactions
          zIndex: 1 // Lower z-index so it doesn't cover other content
        }}
      />
    )
  );
};

export default ParticlesComponent;
