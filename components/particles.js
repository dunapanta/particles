import React from "react";
import Particles from "react-particles-js";

/* const withImages = require('next-images')
module.exports = withImages() */

/* const imag = require('../public/assets/daniel.png')
import leon from '../public/assets/leon.png' */


// window.addEventListener("load", event => {});
let numParticles = 50;

if (process.env.NODE_ENV !== "development" && typeof window !== "undefined") {
  const { innerWidth: width, innerHeight: height } = window;
  const divisor = 100000;

  numParticles = (width * height) / divisor;
}

const particleParams = {
  particles: {
    number: {
      value: numParticles
    },
    color: {
      value: "#fff"
    },
    // shape: {
    //   type: "circle",
    //   stroke: {
    //     width: 1,
    //     color: "#fff"
    //   }
    // },
    size: {
      value: 5,
      random: true
    },
    opacity: {
      value: 0.9,
      random: true
    },
    line_linked: {
      enable_auto: true,
      // distance: 100,
      color: "#ff7733",
      opacity: 0.7,
      width: 1.5
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      grab: {
        line_linked: {
          opacity: 0.7
        }
        // distance: 1000
      }
    },
    detect_on: "window"
  }
};

const CompParticles = () => (
  <div
    style={{
      position: "fixed",
      background:
        "linear-gradient(0deg, rgba(5,6,7,1) 0%, rgba(5,7,2,1) 100%)",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1
    }}
    
  >
      <div style={{
             position: "absolute",
             width: "20rem",
             height: "20rem",
             background: "red",
             top:' 20%',
             right: '20%',
             borderRadius: '50%',
             border: '3px yellow solid',
             /* backgroundImage: url(`${leon}`), */
                    }}>

      </div>
    <Particles style={{ position: "absolute" }} params={particleParams} />
  </div>
);

export default CompParticles;
