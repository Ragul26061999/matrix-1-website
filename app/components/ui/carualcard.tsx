// import React, { useState, useEffect, useCallback } from 'react';

// // Data for the carousel cards
// const cardData = [
//   {
//     title: "Project Phoenix",
//     description: "A high-priority initiative focused on next-generation energy solutions.",
//     color: "bg-red-500",
//     number: "01"
//   },
//   {
//     title: "Market Analysis",
//     description: "Deep dive into Q4 consumer behavior and emerging trends in SaaS.",
//     color: "bg-blue-500",
//     number: "02"
//   },
//   {
//     title: "User Experience Review",
//     description: "Evaluating conversion flows and optimizing mobile interface.",
//     color: "bg-green-500",
//     number: "03"
//   },
//   {
//     title: "Data Science Pipeline",
//     description: "Implementing real-time data ingestion and model retraining.",
//     color: "bg-purple-500",
//     number: "04"
//   },
//   {
//     title: "Annual Planning",
//     description: "Setting fiscal goals and allocating resources for the next twelve months.",
//     color: "bg-amber-500",
//     number: "05"
//   },
// ];

// const StackedCardCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalCards = cardData.length;
//   const intervalDuration = 10000; // 10 seconds

//   // Function to calculate the appropriate CSS state class
//   const getCardStateClasses = useCallback((index) => {
//     // Calculate the position relative to the current front card (index 0)
//     const relativeIndex = (index - currentIndex + totalCards) % totalCards;

//     if (relativeIndex === 0) {
//       return 'state-current';
//     } else if (relativeIndex === 1) {
//       return 'state-next';
//     } else if (relativeIndex === 2) {
//       return 'state-next-next';
//     } else {
//       // All other cards are hidden
//       return 'state-hidden';
//     }
//   }, [currentIndex, totalCards]);

//   // Logic for the automatic 10-second switch
//   useEffect(() => {
//     // Set up the interval timer
//     const interval = setInterval(() => {
//       setCurrentIndex(prevIndex => (prevIndex + 1) % totalCards);
//     }, intervalDuration);

//     // Cleanup function to clear the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, [totalCards]); // Re-run effect only if card count changes

//   // Manual navigation functions
//   const nextCard = () => {
//     setCurrentIndex(prevIndex => (prevIndex + 1) % totalCards);
//   };

//   const prevCard = () => {
//     setCurrentIndex(prevIndex => (prevIndex - 1 + totalCards) % totalCards);
//   };

//   return (
//     <>
//       {/* Custom CSS for the stacked effect and transitions */}
//       <style jsx="true">{`
//         :root {
//             --card-width: 90%;
//             --card-max-width: 400px;
//             --transition-duration: 0.7s;
//         }
//         .carousel-card {
//             position: absolute;
//             width: var(--card-width);
//             max-width: var(--card-max-width);
//             height: 300px;
//             top: 50%;
//             left: 50%;
//             /* Shared transition properties */
//             transition: transform var(--transition-duration), opacity var(--transition-duration), z-index 0s linear calc(var(--transition-duration) * 0.5);
//             /* Initial centered position and hidden state */
//             transform: translate(-50%, -50%) scale(0.5);
//             opacity: 0;
//             pointer-events: none;
//         }
//         /* The card currently shown in the front */
//         .state-current {
//             z-index: 30;
//             opacity: 1;
//             transform: translate(-50%, -50%) scale(1);
//             pointer-events: auto;
//             cursor: pointer;
//         }
//         /* The card directly behind and slightly to the right */
//         .state-next {
//             z-index: 20;
//             opacity: 0.7;
//             transform: translate(calc(-50% + 1rem), calc(-50% + 0.5rem)) scale(0.95);
//             pointer-events: none;
//         }
//         /* The card two positions behind, even more obscured */
//         .state-next-next {
//             z-index: 10;
//             opacity: 0.4;
//             transform: translate(calc(-50% + 2rem), calc(-50% + 1rem)) scale(0.9);
//             pointer-events: none;
//         }
//         /* Cards in the background (hidden) */
//         .state-hidden {
//             z-index: 0;
//             opacity: 0;
//             transform: translate(-50%, -50%) scale(0.85);
//         }
//       `}</style>

//       {/* Main Layout */}
//       <div className="bg-gray-50 flex flex-col items-center justify-center min-h-screen p-4 font-inter">

//         {/* Carousel Container */}
//         <div id="carousel-container" className="relative w-full max-w-lg h-[450px] mx-auto">

//             <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center pt-8 select-none">Dynamic Task Flow</h1>

//             {/* Render Cards */}
//             {cardData.map((card, index) => (
//                 <div
//                     key={index}
//                     className={`carousel-card ${card.color} text-white p-6 flex flex-col justify-end rounded-3xl shadow-xl transition-all ${getCardStateClasses(index)}`}
//                 >
//                     <h2 className="text-3xl font-extrabold mb-2">{card.title}</h2>
//                     <p className="text-sm opacity-90">{card.description}</p>
//                     <div className="absolute top-4 right-6 text-6xl font-black opacity-30 select-none">
//                         {card.number}
//                     </div>
//                 </div>
//             ))}
//         </div>

//         {/* Controls */}
//         <div className="mt-12 flex space-x-4">
//             <button
//                 onClick={prevCard}
//                 className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl shadow-md hover:bg-gray-300 transition duration-300 font-medium transform active:scale-95"
//             >
//                 &larr; Previous
//             </button>
//             <button
//                 onClick={nextCard}
//                 className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300 font-medium transform active:scale-95"
//             >
//                 Next &rarr;
//             </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StackedCardCarousel;