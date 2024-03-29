import { useParallax } from "react-scroll-parallax";
import {styles } from './'

export function ProjectCard() {
  const parallax = useParallax({
    rotateY: [0, 360],
  });
  return (
    <div ref={parallax.ref} className="spinner flex gap-3">
      <img
        src="./images/me.png"
        height="4000"
        width="4000"
        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </div>
  );
}
