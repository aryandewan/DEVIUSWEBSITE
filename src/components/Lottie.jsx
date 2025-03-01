import React from "react";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieAnimation = () => {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "./lottie/Hi.json",
    });

    // Cleanup
    return () => anim.destroy();
  }, []);

  return (
    <div
      ref={container}
      id="lottie-container"
      className="w-3/5 xl:w-full xl:h-full md:w-3/4"
    />
  );
};

export default LottieAnimation;
