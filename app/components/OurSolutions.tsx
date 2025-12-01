'use client';

import Link from "next/link";
import { useState, useCallback, useEffect } from 'react';

const CarouselCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 6; // Number of cards we have

  // Function to get the visible cards (left, center, right)
  const getVisibleCards = useCallback(() => {
    const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
    const nextIndex = (currentIndex + 1) % totalCards;
    return [prevIndex, currentIndex, nextIndex];
  }, [currentIndex, totalCards]);

  // Auto-advance the carousel every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalCards);
    }, 10000);
    return () => clearInterval(interval);
  }, [totalCards]);

  // Navigation functions
  const nextCard = () => setCurrentIndex(prev => (prev + 1) % totalCards);
  const prevCard = () => setCurrentIndex(prev => (prev - 1 + totalCards) % totalCards);

  return (
    <>
      <style jsx>{`
        :root {
          --card-width: 90%;
          --card-max-width: 350px;
          --transition-duration: 0.7s;
        }
        .carousel-container {
          position: relative;
          width: 100%;
          height: 400px;
          perspective: 1200px;
        }
        .carousel-card {
          position: absolute;
          width: var(--card-width);
          max-width: var(--card-max-width);
          height: 280px;
          top: 50%;
          left: 50%;
          transition: all var(--transition-duration) ease-in-out;
          transform-style: preserve-3d;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        /* Left Card */
        .card-left {
          transform: translate(calc(-50% - 180px), -50%) scale(0.9);
          z-index: 20;
          opacity: 0.8;
          cursor: pointer;
        }
        
        /* Center Card */
        .card-center {
          transform: translate(-50%, -50%) scale(1);
          z-index: 30;
          opacity: 1;
          cursor: pointer;
          box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.2);
        }
        
        /* Right Card */
        .card-right {
          transform: translate(calc(-50% + 180px), -50%) scale(0.9);
          z-index: 20;
          opacity: 0.8;
          cursor: pointer;
        }
        
        /* Hidden Cards */
        .card-hidden {
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0;
          z-index: 0;
          pointer-events: none;
        }
        
        /* Hover Effects */
        .card-left:hover, .card-right:hover {
          transform: scale(0.95);
          opacity: 0.9;
        }
        
        .card-center:hover {
          transform: translate(-50%, -50%) scale(1.02);
        }
        
        @media (max-width: 1024px) {
          .card-left {
            transform: translate(calc(-50% - 150px), -50%) scale(0.85);
          }
          .card-right {
            transform: translate(calc(-50% + 150px), -50%) scale(0.85);
          }
        }
        
        @media (max-width: 768px) {
          .carousel-container {
            height: 350px;
          }
          .carousel-card {
            height: 250px;
          }
          .card-left {
            transform: translate(calc(-50% - 120px), -50%) scale(0.8);
          }
          .card-right {
            transform: translate(calc(-50% + 120px), -50%) scale(0.8);
          }
        }
      `}</style>

      <div className="carousel-container">
        {[
          {
            title: "Smart Classroom",
            description: "Interactive learning environments",
            image: "/image/51.png"
          },
          {
            title: "EduTech Software",
            description: "Cutting-edge learning platforms",
            image: "/image/52.png"
          },
          {
            title: "Interactive Tech",
            description: "Engaging digital whiteboards",
            image: "/image/53.png"
          },
          {
            title: "VR Education",
            description: "Immersive learning experiences",
            image: "/image/54.png"
          },
          {
            title: "Collaboration Hub",
            description: "Team-based learning spaces",
            image: "/image/55.png"
          },
          {
            title: "Digital Assessment",
            description: "Advanced evaluation tools",
            image: "/image/56.png"
          }
        ].map((card, index) => {
          const visibleCards = getVisibleCards();
          let cardClass = 'card-hidden';
          let cardPosition = -1;
          
          if (index === visibleCards[0]) {
            cardClass = 'card-left';
            cardPosition = 0;
          } else if (index === visibleCards[1]) {
            cardClass = 'card-center';
            cardPosition = 1;
          } else if (index === visibleCards[2]) {
            cardClass = 'card-right';
            cardPosition = 2;
          }
          
          return (
            <div
              key={index}
              className={`carousel-card ${cardClass}`}
              onClick={() => {
                if (cardPosition === 0) prevCard();
                else if (cardPosition === 2) nextCard();
                else setCurrentIndex(index);
              }}
            >
              <div className="relative w-full h-full group">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl mb-1">{card.title}</h3>
                    <p className="text-sm opacity-90">{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={prevCard}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Previous card"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextCard}
          className="p-2 rounded-full bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition-colors"
          aria-label="Next card"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default function OurSolutions() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-white">
        {/* Background section title */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-19 left-10 text-6xl sm:text-5xl font-extrabold tracking-wider text-gray-200/60 select-none">
           OUR SOLUTIONS
          </div>
        </div>
        
        {/* Background accents - blue circuit pattern */}
        {/* <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-0 h-48 w-full opacity-40" style={{backgroundImage: 'linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 75%, #f3f4f6 75%, #f3f4f6), linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 75%, #f3f4f6 75%, #f3f4f6)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px'}} />
          <div className="absolute top-0 left-0 h-48 w-48 opacity-30" style={{backgroundImage: 'radial-gradient(circle, #e5e7eb 10%, rgba(0,0,0,0) 10%)', backgroundSize: '20px 20px'}} />
        </div> */}

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 relative">
          {/* Heading & Copy with Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 pt-7">Our Solutions</h2>
              <p className="mt-3 text-gray-700 leading-relaxed max-w-prose">
                Empowering education through innovative display technologies from interactive panels to dynamic video walls,
                we create engaging, connected, and future-ready learning environments.
              </p>
            </div>
            
          </div>

          {/* Image strip cards - updated to match reference image */}
          <div className="mt-8 relative w-full max-w-6xl mx-auto">
            <CarouselCard />
          </div>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <Link
              href="#solutions"
              className="inline-flex items-center justify-center rounded-md bg-white text-gray-800 px-5 py-2 text-sm font-semibold shadow-sm border border-gray-300 hover:bg-gray-50"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        {/* Floating square accent with animation */}
        <style jsx>{`
          @keyframes floatDiagonal {
            0% { transform: translate(-10px, -10px) rotate(45deg); }
            50% { transform: translate(10px, 10px) rotate(45deg); }
            100% { transform: translate(-10px, -10px) rotate(45deg); }
          }
        `}</style>
        <div 
          className="hidden sm:block absolute top-20 right-16 h-12 w-12 border-8 border-blue-200 rounded-lg"
          style={{
            animation: 'floatDiagonal 6s ease-in-out infinite',
            transform: 'rotate(45deg)'
          }}
        />

        {/* Center right image with background */}
            {/* <div className="relative flex justify-center items-center">
              <div className="relative w-full h-48 rounded-2xl overflow-hidden flex items-center justify-center ">
                <div className="absolute inset-0 bg-grid-pattern opacity-20 "></div>
                <img
                  src="/image/circuit 1.png"
                  alt="Circuit Pattern"
                  className="w-3/4 h-3/4 object-contain rounded-xl "
                />
              </div>
            </div> */}

         {/* Background accents */}
        {/* <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-3xl bg-gradient-to-br from-indigo-100 to-white blur-2xl" />
          <div className="hidden sm:block absolute top-6 right-8 h-40 w-64 opacity-40" style={{backgroundImage: 'linear-gradient(135deg, #e5e7eb 12.5%, rgba(0,0,0,0) 12.5%), linear-gradient(225deg, #e5e7eb 12.5%, rgba(0,0,0,0) 12.5%), linear-gradient(45deg, #e5e7eb 12.5%, rgba(0,0,0,0) 12.5%), linear-gradient(315deg, #e5e7eb 12.5%, #ffffff 12.5%)', backgroundPosition: '10px 0, 10px 0, 0 0, 0 0', backgroundSize: '10px 10px', backgroundRepeat: 'repeat'}} />
        </div> */}

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
          {/* Right-side background image (circuit) behind Community Impact */}
          {/* <div className="pointer-events-none hidden md:flex absolute inset-y-0 right-0 w-2/5 -z-10 items-center justify-center transform -translate-y-16 translate-x-6">
            <img
              src="/image/circuit 1.png"
              alt="Circuit pattern background"
              className="max-w-sm w-full opacity-60 select-none"
            />
          </div> */}
          {/* Left-side background image (triangle) behind Community Impact */}
          <div className="pointer-events-none hidden md:flex absolute inset-y-0 left-0 w-1/4 -z-10 items-center justify-center transform -translate-y-16 -translate-x-6">
            <img
              src="/image/tri.png"
              alt="Decorative gradient triangle background"
              className="max-w-[160px] w-full opacity-60 select-none"
            />
          </div>
          {/* Header/Intro with top line */}
          <div className="relative ml-65">
            {/* <div className="absolute left-0 top-6 h-10 w-1 bg-blue-500 rounded-full" /> */}
            <h2 className="pl-6 text-2xl sm:text-3xl font-extrabold text-gray-900">Community Impact</h2>
            <div className="mt-2 pl-6 max-w-2xl text-gray-700">
              Matrix Smart Learning transforms education through interactive, tech‑driven solutions. We empower learners with engaging tools that make knowledge accessible, effective, and future‑ready.
            </div>

            {/* Top connector line */}
            <div className="mt-6 ml-5 h-0.5 bg-blue-400 w-full max-w-4xl" />
          </div>

          {/* Stats with connecting lines */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-10 relative ">
            {/* Left block */}
            <div className="relative ml-70.5">
              {/* vertical line from header */}
              <div className="absolute -top-10 left-0 w-0.5 h-10 bg-blue-400 -ml-1" />
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 -ml-10">500+</div>
              <div className="text-blue-600 font-semibold -ml-10">Schools</div>
            </div>

            {/* Middle block with squared connector */}
            <div className="relative">
              {/* connector shape */}
              {/* <div className="absolute -top-10 left-0 right-6 h-0.5 bg-blue-400" /> */}
              <div className="absolute -top-10 right-35 w-0.5 h-15 bg-blue-400 mt-6" />
              <div className="absolute -top-4 left-60 right-0 h-0.5 w-129 bg-blue-400 "></div>
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 ml-45 mt-15 ">6000+</div>
              <div className="text-blue-600 font-semibold ml-45">installations</div>
            </div>

            {/* Right block with longer drop line */}
            <div className="relative">
              {/* <div className="absolute -top-10 left-0 right-0 h-0.5 bg-blue-400 " /> */}
              <div className="absolute -top-10 right-10 w-0.5 h-20 bg-blue-400 " />
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 ml-77 mt-15">13+</div>
              <div className="text-blue-600 font-semibold ml-77 ">Years of excellence</div>
            </div>
          </div>
        </div>

        {/* small decorative star bottom-left */}
        <div className="absolute left-6 bottom-8 h-6 w-6 rotate-12 border-2 border-blue-300 rounded-md" />    
      </section>
 

      {/* <section className="relative isolate overflow-hidden bg-white -ml-20 -mr-20">
       
      </section> */}
    </div>
  );
}