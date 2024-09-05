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
          value: 'transparent', 
        },
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 30, 
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: ['#FFA500', '#FFD700', '#FF8C00'], 
        },
        opacity: {
          value: 0.8,
          random: true,
        },
        size: {
          value: { min: 3, max: 8 },
          random: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          speed: 0.6, 
        },
        shape: {
          type: 'polygon', 
          polygon: {
            sides: 6,
          },
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
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
      />
    )
  );
};

export default ParticlesComponent;
