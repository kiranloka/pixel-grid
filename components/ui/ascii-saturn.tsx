"use client";
import React, { useEffect, useRef } from "react";

export const AsciiSaturn = () => {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const render = () => {
      let A = 0;
      let B = 0;

      const run = () => {
        if (!preRef.current) return;

        const width = 100;
        const height = 50;
        const buffer = new Array(width * height).fill(" ");
        const zBuffer = new Array(width * height).fill(0);

        const project = (
          x: number,
          y: number,
          z: number,
          char: string,
          luminance: number = 1,
        ) => {
          const K1 = 50;
          const K2 = 5;

          // Rotation around X (tilt)
          const y1 = y * Math.cos(A) - z * Math.sin(A);
          const z1 = y * Math.sin(A) + z * Math.cos(A);
          const x1 = x;

          // Rotation around Z (spin)
          const x2 = x1 * Math.cos(B) - y1 * Math.sin(B);
          const y2 = x1 * Math.sin(B) + y1 * Math.cos(B);
          const z2 = z1;

          // Static tilt for Saturn aesthetic
          const staticTilt = 0.4;
          const y3 = y2 * Math.cos(staticTilt) - z2 * Math.sin(staticTilt);
          const z3 = y2 * Math.sin(staticTilt) + z2 * Math.cos(staticTilt);
          const x3 = x2;

          // Perspective projection
          const ooz = 1 / (z3 + K2 + 30);

          const xp = Math.floor(width / 2 + K1 * ooz * x3 * 2);
          const yp = Math.floor(height / 2 - K1 * ooz * y3);

          if (xp >= 0 && xp < width && yp >= 0 && yp < height) {
            const idx = xp + yp * width;
            if (ooz > zBuffer[idx]) {
              zBuffer[idx] = ooz;
              buffer[idx] = char;
            }
          }
        };

        // Planet sphere with better shading
        const R = 7;
        for (let lat = -Math.PI / 2; lat < Math.PI / 2; lat += 0.04) {
          for (let lon = 0; lon < 2 * Math.PI; lon += 0.04) {
            const x = R * Math.cos(lat) * Math.cos(lon);
            const y = R * Math.cos(lat) * Math.sin(lon);
            const z = R * Math.sin(lat);

            // Better shading based on surface normal
            const nx = Math.cos(lat) * Math.cos(lon);
            const ny = Math.cos(lat) * Math.sin(lon);
            const nz = Math.sin(lat);

            // Light from top-right
            const lightX = 0.5,
              lightY = 0.5,
              lightZ = 0.7;
            const brightness = Math.max(
              0,
              nx * lightX + ny * lightY + nz * lightZ,
            );

            let char;
            if (brightness > 0.7) char = "@";
            else if (brightness > 0.5) char = "O";
            else if (brightness > 0.3) char = "o";
            else if (brightness > 0.15) char = "*";
            else char = ".";

            project(x, y, z, char);
          }
        }

        // Multi-layer ring system
        const ringLayers = [
          { r_inner: 10, r_outer: 12, char: "≈", step: 0.3 },
          { r_inner: 12, r_outer: 14, char: "~", step: 0.25 },
          { r_inner: 14, r_outer: 17, char: "-", step: 0.2 },
          { r_inner: 17, r_outer: 20, char: "·", step: 0.25 },
          { r_inner: 20, r_outer: 22, char: ".", step: 0.3 },
        ];

        ringLayers.forEach(({ r_inner, r_outer, char, step }) => {
          for (let r = r_inner; r < r_outer; r += step) {
            for (let phi = 0; phi < 2 * Math.PI; phi += 0.02) {
              const x = r * Math.cos(phi);
              const y = r * Math.sin(phi);
              const z = 0;

              // Add slight vertical variation for ring texture
              const variance = Math.sin(phi * 20 + r * 5) * 0.3;
              project(x, y, z + variance, char);
            }
          }
        });

        // Inner bright ring accent
        for (let phi = 0; phi < 2 * Math.PI; phi += 0.015) {
          const r = 15;
          const x = r * Math.cos(phi);
          const y = r * Math.sin(phi);
          project(x, y, 0, "=");
        }

        let output = "";
        for (let k = 0; k < height; k++) {
          output += buffer.slice(k * width, (k + 1) * width).join("") + "\n";
        }
        preRef.current.innerText = output;

        A += 0.015;
        B += 0.04;
        animationFrameId = requestAnimationFrame(run);
      };

      run();
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="flex select-none items-center justify-center overflow-hidden bg-transparent text-amber-500 font-mono text-[8px] leading-[8px] md:text-[11px] md:leading-[11px] opacity-90 mix-blend-screen">
      <pre ref={preRef} className="whitespace-pre overflow-hidden" />
    </div>
  );
};
