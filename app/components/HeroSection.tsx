"use client";
import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const [active, setActive] = useState<"center" | "left" | "right">("center");
  return (
    <>
      <style jsx>{`
        @keyframes rotateStars {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes floatPlane {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .rotate-stars {
          animation: rotateStars 6s linear infinite;
        }
        .float-plane {
          animation: floatPlane 3s ease-in-out infinite;
        }
      `}</style>
    <section className="relative isolate overflow-hidden bg-white -ml-20 -mr-20 -mt-9">
      {/* Paper plane decoration - top left */}
      <div className="absolute top-20 left-25 z-0">
        <img 
          src="/image/plane 1.png" 
          alt="" 
          className="h-22 w-22 opacity-80 float-plane"
        />
      </div>

      {/* Stars decoration - bottom right */}
      <div className="absolute bottom-10 right-25 z-0">
        <img 
          src="/image/stars.png" 
          alt="" 
          className="h-16 w-16 opacity-60 rotate-stars"
        />
      </div>

      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/image/backgrould.png" 
          alt="Background" 
          className="h-full w-full object-cover "
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-30 py-4 sm:py-20 lg:py-8">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-800">
            Transforming <span className="text-blue-500">E</span>ducation Together
          </h1>
        </div>

        {/* Image cluster - hover swaps to center */}
        <div
          className="relative -mt-2 -sm:mt-12 -lg:mt-14 h-[160px] sm:h-[340px]"
          onMouseLeave={() => setActive("center")}
        >
          {/* Center card - default big, becomes small when left/right hovered */}
          <div
            onMouseEnter={() => setActive("center")}
            className={
              "absolute rounded-xl shadow-xl overflow-hidden transition-all duration-500 " +
              (active === "center"
                ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[92%] sm:w-[600px] aspect-video"
                : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-48 sm:w-60 ")
            }
          >
            <img
              src="/image/200.png"
              alt="Classroom with students using tablets"
              className="h-full w-full object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-xl flex items-end p-4 sm:p-6">
              <div className="text-white transform translate-y-2 sm:translate-y-4 hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-lg sm:text-2xl mb-1 sm:mb-2">Interactive Learning</h3>
                <p className="text-xs sm:text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 delay-100">Engaging classroom experiences that inspire students</p>
              </div>
            </div>
          </div>

          {/* Left card - small by default, becomes big when hovered (stays in left position) */}
          <div
            onMouseEnter={() => setActive("left")}
            className={
              "absolute rounded-xl shadow-xl overflow-hidden transition-all duration-500 " +
              (active === "left"
                ? "left-2 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-[92%] sm:w-[600px] aspect-video"
                : "left-2 sm:left-8 top-1/2 -translate-y-1/2 z-10 w-48 sm:w-60 ")
            }
          >
            <img
              src="/image/Rectangle 22807.png"
              alt="Digital content preview"
              className="h-full w-full object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4 sm:p-6">
              <div className="text-white transform translate-y-2 sm:translate-y-4 hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-base sm:text-2xl">Digital Content</h3>
                <p className="hidden sm:block text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 delay-100">Interactive learning materials and resources</p>
              </div>
            </div>
          </div>

          {/* Right card - small by default, becomes big when hovered (stays in right position) */}
          <div
            onMouseEnter={() => setActive("right")}
            className={
              "absolute rounded-xl shadow-xl overflow-hidden transition-all duration-500 " +
              (active === "right"
                ? "right-2 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-[92%] sm:w-[600px] aspect-video"
                : "right-2 sm:right-8 top-1/2 -translate-y-1/2 z-10 w-48 sm:w-60")
            }
          >
            <img
              src="/image/Rectangle 22805.png"
              alt="Projector device"
              className="h-full w-full object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4 sm:p-6">
              <div className="text-white transform translate-y-2 sm:translate-y-4 hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-base sm:text-2xl">Projection Tech</h3>
                <p className="hidden sm:block text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 delay-100">Crystal clear displays for immersive learning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtext */}
        <div className="max-w-3xl mx-auto mt-10 text-center text-gray-600">
          <p>
            <span className="font-semibold text-blue-500">Transform</span> your educational experience with Matrix Solutions,
            where innovative technology meets tailored support to empower educators and inspire students in engaging
            learning environments.
          </p>

          <div className="mt-8">
            <Link
              href="#explore"
              className="inline-flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 text-sm font-semibold shadow-sm border border-gray-200 transition-colors"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>

    </section>
    </>
  );
}
