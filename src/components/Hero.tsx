import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import intro from "../assets/video3.mp4";

const Hero: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const [initCursor, setInitCursor] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Animate hero text fade-in
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );
    }

    // Custom cursor hover over links/buttons
    const links = document.querySelectorAll("a, button");
    const handleMouseOver = () => cursor.classList.add("scale-125");
    const handleMouseOut = () => cursor.classList.remove("scale-125");
    links.forEach((link) => {
      link.addEventListener("mouseover", handleMouseOver);
      link.addEventListener("mouseout", handleMouseOut);
    });

    const moveCursor = (x: number, y: number) => {
      if (!initCursor) {
        gsap.to(cursor, { duration: 0.5, opacity: 1 });
        setInitCursor(true);
      }
      gsap.to(cursor, { duration: 0, left: x, top: y });
    };

    const mouseMoveHandler = (e: MouseEvent) => moveCursor(e.clientX, e.clientY);
    const touchMoveHandler = (e: TouchEvent) => moveCursor(e.touches[0].clientX, e.touches[0].clientY);
    const mouseOutHandler = () => {
      gsap.to(cursor, { duration: 0.3, opacity: 0 });
      setInitCursor(false);
    };
    const touchEndHandler = () => setTimeout(() => gsap.to(cursor, { duration: 0.3, opacity: 0 }), 200);

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mouseout", mouseOutHandler);
    window.addEventListener("touchmove", touchMoveHandler);
    window.addEventListener("touchend", touchEndHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseout", mouseOutHandler);
      window.removeEventListener("touchmove", touchMoveHandler);
      window.removeEventListener("touchend", touchEndHandler);

      links.forEach((link) => {
        link.removeEventListener("mouseover", handleMouseOver);
        link.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, [initCursor]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={intro} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      {/* Hero Text */}
  <h1
  ref={textRef}
  className="relative z-10 text-center text-[8vw] md:text-[6vw] font-black text-transparent bg-clip-text bg-[linear-gradient(45deg,transparent_25%,white_50%,transparent_75%)] bg-[length:200%_200%] leading-[1em] px-4"
>
  Where Creativity <br /> &amp; Strategy Meet
</h1>
   
    </section>
  );
};

export default Hero;
