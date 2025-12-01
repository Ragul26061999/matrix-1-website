'use client';

import { useState } from 'react';

export default function WhyUs() {
  const [activeItem, setActiveItem] = useState(0);

  const items = [
    {
      title: 'Innovative Technology',
      image: '/image/207.png'
    },
    {
      title: 'Tailored Solutions',
      image: '/image/208.png'
    },
    {
      title: 'Expert Support',
      image: '/image/209.png'
    },
    {
      title: 'Commitment to Educational Excellence',
      image: '/image/210.png'
    }
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white -ml-20 -mr-20">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-3xl bg-gradient-to-br from-indigo-100 to-white blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Text */}
        <div className="lg:col-span-5">
          <div className="relative mb-6">
            <p className="relative z-10 text-2xl sm:text-3xl font-extrabold text-blue-600 pt-7">Why Us</p>
            <p
              className="pointer-events-none absolute left-0 top-1 sm:top-2 text-4xl sm:text-5xl font-extrabold tracking-wider text-gray-200 select-none z-0"
              aria-hidden
            >
              WHY US
            </p>
          </div>

          <ul className="space-y-6 text-gray-900">
            {items.map((item, index) => (
              <li
                key={index}
                className={`font-semibold cursor-pointer transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                  activeItem === index ? 'text-blue-600 scale-105' : ''
                }`}
                onMouseEnter={() => setActiveItem(index)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image: Interactive display */}
        <div className="lg:col-span-7 relative">
          <div className="relative ml-auto w-full max-w-2xl aspect-[16/10] overflow-hidden">
            {/* Circle/ellipse mask via rounded-full on large container */}
            <div className="absolute inset-0 rounded-[9999px] overflow-hidden transition-all duration-500">
              <img
                src={items[activeItem].image}
                alt={items[activeItem].title}
                className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Image indicator dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeItem === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setActiveItem(index)}
                aria-label={`View ${items[index].title} image`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
