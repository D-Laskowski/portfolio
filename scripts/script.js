tsParticles.load(
  "tsparticles",

  {
    background: {
      color: {
        value: "#000000",
      },
    },
    fullScreen: {
      enable: true,
      zIndex: 1,
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
    particles: {
      color: {
        animation: {
          h: {
            enable: true,
            speed: 20,
          },
        },
      },
      links: {
        color: {
          value: "#ffffff",
        },
        enable: true,
        opacity: 0.4,
      },
      move: {
        enable: true,
        path: {},
        outModes: {
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        speed: 0.5,
        spin: {
          enable: true,
        },
      },
      number: {
        density: {
          enable: true,
        },
      },
      opacity: {
        value: 0.5,
        animation: {},
      },
      size: {
        value: {
          min: 1,
          max: 5,
        },
        animation: {},
      },
    },
  }
);
