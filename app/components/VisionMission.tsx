"use client";

export default function VisionMission() {
  return (
    <>
      <style jsx>{`
        @keyframes rotateClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateAntiClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes moveRightToTop {
          0% { transform: translateX(100px) translateY(0px); }
          100% { transform: translateX(0px) translateY(-50px); }
        }
        @keyframes rotateStarsVM {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes floatVectorVM {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .rotate-clockwise {
          animation: rotateClockwise 10s linear infinite;
        }
        .rotate-anticlockwise {
          animation: rotateAntiClockwise 10s linear infinite;
        }
        .move-right-to-top {
          animation: moveRightToTop 3s ease-in-out infinite alternate;
        }
        .rotate-stars-vm {
          animation: rotateStarsVM 6s linear infinite;
        }
        .float-vector {
          animation: floatVectorVM 3s ease-in-out infinite;
        }
      `}</style>
    <section className="relative isolate overflow-hidden bg-white -ml-20 -mr-20">
      {/* Vector decoration - top left */}
      <div className="absolute top-20 left-90 z-0">
        <img 
          src="/image/Vector.png" 
          alt="" 
          className="h-16 w-16 opacity-70 float-vector"
        />
      </div>

      {/* Stars decoration - bottom left */}
      <div className="absolute bottom-5 left-20 z-0">
        <img 
          src="/image/stars.png" 
          alt="" 
          className="h-20 w-20 opacity-50 rotate-stars-vm"
        />
      </div>

      {/* Top left image */}
      <div className="absolute top-0 left-7 z-0">
        <img 
          src="/image/down.png" 
          alt="" 
          className="h-full w-full opacity-70 ml-2"
        />
      </div>
      
      {/* Background gradient corner like reference */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-70" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Vision circle */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start mt-50">
            <div className="relative w-[320px] sm:w-[380px] aspect-square">
              {/* Outer arc */}
              <img src="/image/Ellipse 1021.png" alt="Vision circle" className="absolute inset-0 w-full h-full object-contain rotate-anticlockwise" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10 ml-2">
                <h3 className="text-3xl font-extrabold tracking-wide text-blue-600">VISION</h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  To revolutionize learning through technology-driven education by creating future-ready classrooms,
                  inspiring innovation, and becoming the most trusted partner in digital transformation.
                </p>
              </div>
            </div>
          </div>

          {/* Center: Mission circle */}
          <div className="lg:col-span-4 order-last lg:order-none flex justify-center -mt-40 -ml-40">
            <div className="relative w-[340px] sm:w-[420px] aspect-square lg:-translate-y-4 lg:-translate-x-4">
              <img src="/image/Ellipse 1020.png" alt="Mission circle" className="absolute inset-0 w-full h-full object-contain rotate-clockwise" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10 ml-2">
                <h3 className="text-3xl font-extrabold tracking-wide text-blue-600">MISSION</h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  To empower institutions with smart classroom solutions by combining global technology, curated content,
                  and expert support for seamless digital transformation.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Person image + bars */}
          <div className="lg:col-span-3 flex items-end justify-center lg:justify-end relative">
            <div className="relative">
              <img
                src="/image/teacher 1.png"
                alt="Teacher with educational technology"
                className="h-[360px] w-auto object-cover drop-shadow-2xl relative z-10"
              />
              {/* Bars behind */}
              <div className="absolute bottom-5 -left-24 h-38 w-40 bg-gradient-to-t from-blue-200 to-blue-100 rounded-md z-0" />
              <div className="absolute bottom-5 -right-10 h-38 w-5 bg-blue-300 rounded-sm z-0" />
              <div className="absolute bottom-5 -right-2 h-28 w-5 bg-blue-200 rounded-sm z-0" />
              <div className="absolute bottom-5 right-6 h-18 w-5 bg-blue-100 rounded-sm z-0" />
            </div>
          </div>
        </div>

        {/* subtle corner diamond */}
        <div className="hidden sm:block absolute top-20 right-30 h-14 w-14 border-10 border-blue-200 rotate-45 rounded-lg move-right-to-top" />
      </div>
    </section>
    </>
  );
}
