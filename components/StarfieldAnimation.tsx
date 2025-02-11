"use client";

import { useEffect, useRef } from "react";

export default function StarfieldAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Star properties
    const stars: { x: number; y: number; z: number }[] = [];
    const STAR_COUNT = 200;
    const STAR_SPEED = 0.7;
    const MAX_DEPTH = 1000;

    // Initialize stars with fewer in the center
    for (let i = 0; i < STAR_COUNT; i++) {
      let x, y;
      // Create a dead zone in the center for better text readability
      do {
        x = Math.random() * canvas.width - canvas.width / 2;
        y = Math.random() * canvas.height - canvas.height / 2;
      } while (
        Math.abs(x) < canvas.width * 0.2 &&
        Math.abs(y) < canvas.height * 0.2
      );

      stars.push({
        x,
        y,
        z: Math.random() * MAX_DEPTH,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      stars.forEach((star) => {
        star.z -= STAR_SPEED;

        if (star.z <= 0) {
          star.z = MAX_DEPTH;
          // Ensure new stars don't spawn in the center
          do {
            star.x = Math.random() * canvas.width - centerX;
            star.y = Math.random() * canvas.height - centerY;
          } while (
            Math.abs(star.x) < canvas.width * 0.2 &&
            Math.abs(star.y) < canvas.height * 0.2
          );
        }

        const x = (star.x / star.z) * 100 + centerX;
        const y = (star.y / star.z) * 100 + centerY;
        const size = (1 - star.z / MAX_DEPTH) * 2;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${
          (1 - star.z / MAX_DEPTH) * 0.5
        })`;
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-60"
    />
  );
}
