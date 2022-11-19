import React, { useState, useRef, useLayoutEffect, useCallback } from "react";
import "./Animation.css";
import { gsap } from "gsap";

function Box({ children, addAnimation, index }) {
  const el = useRef();

  useLayoutEffect(() => {
    const animation = gsap.to(el.current, { x: -100 });
    addAnimation(animation, index);

    return () => animation.progress(0).kill();
  }, [addAnimation, index]);

  return (
    <div className="box" ref={el}>
      {children}
    </div>
  );
}

export default function Animation() {
  const [tl, setTl] = useState();

  const app = useRef(); // create a ref for the root level element (we'll use it later)
  const [reversed, setReversed] = useState(false);

  const addAnimation = useCallback(
    (animation, index) => {
      tl.add(animation, index * 0.1);
    },
    [tl]
  );


  return (
    <div className="App">
        <button onClick={()=>{
            addAnimation()
        }}></button>
      <Box addAnimation={addAnimation} index={0}>
        Box
      </Box>
    </div>
  );
}
