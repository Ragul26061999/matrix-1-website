import Link from "next/link";

export default function OurSolutions() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-white">
        {/* Background accents - blue circuit pattern */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-0 h-48 w-full opacity-40" style={{backgroundImage: 'linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 75%, #f3f4f6 75%, #f3f4f6), linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 75%, #f3f4f6 75%, #f3f4f6)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px'}} />
          <div className="absolute top-0 left-0 h-48 w-48 opacity-30" style={{backgroundImage: 'radial-gradient(circle, #e5e7eb 10%, rgba(0,0,0,0) 10%)', backgroundSize: '20px 20px'}} />
        </div>

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
          <div className="mt-8 relative h-64 sm:h-80 w-full overflow-hidden">
            <div className="absolute inset-0 flex items-center">
              <div className="flex space-x-[-80px] hover:space-x-[-80px] transition-all duration-500 ease-out">
                {/* Card 1 */}
                <div className="relative w-68 h-64 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:z-10 hover:shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop"
                    alt="Smart Classroom"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-bold text-lg">Smart Classroom</h3>
                      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Interactive learning environments</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative w-68 h-64 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:z-10 hover:shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop"
                    alt="Educational Software"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-bold text-lg">EduTech Software</h3>
                      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Cutting-edge learning platforms</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="relative w-68 h-64 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:z-10 hover:shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-86ab42a0e620?q=80&w=1400&auto=format&fit=crop"
                    alt="Interactive Displays"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-bold text-lg">Interactive Tech</h3>
                      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Engaging digital whiteboards</p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="relative w-68 h-64 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:z-10 hover:shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1593508512255-86ab42a0e620?q=80&w=1400&auto=format&fit=crop"
                    alt="VR Learning"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-bold text-lg">VR Education</h3>
                      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Immersive learning experiences</p>
                    </div>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="relative w-68 h-64 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:z-10 hover:shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop"
                    alt="Collaborative Learning"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-bold text-lg">Collaboration Hub</h3>
                      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Team-based learning spaces</p>
                    </div>
                  </div>
                </div>

                {/* Card 6 */}
                <div className="relative w-68 h-64 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:z-10 hover:shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1400&auto=format&fit=crop"
                    alt="Digital Assessment"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-bold text-lg">Digital Assessment</h3>
                      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Advanced evaluation tools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

        {/* Floating square accent */}
        <div className="hidden sm:block absolute top-20 right-16 h-12 w-12 border-4 border-blue-200 rotate-45 rounded-lg" />

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
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-3xl bg-gradient-to-br from-indigo-100 to-white blur-2xl" />
          <div className="hidden sm:block absolute top-6 right-8 h-40 w-64 opacity-40" style={{backgroundImage: 'linear-gradient(135deg, #e5e7eb 12.5%, rgba(0,0,0,0) 12.5%), linear-gradient(225deg, #e5e7eb 12.5%, rgba(0,0,0,0) 12.5%), linear-gradient(45deg, #e5e7eb 12.5%, rgba(0,0,0,0) 12.5%), linear-gradient(315deg, #e5e7eb 12.5%, #ffffff 12.5%)', backgroundPosition: '10px 0, 10px 0, 0 0, 0 0', backgroundSize: '10px 10px', backgroundRepeat: 'repeat'}} />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
          {/* Right-side background image (circuit) behind Community Impact */}
          <div className="pointer-events-none hidden md:flex absolute inset-y-0 right-0 w-2/5 -z-10 items-center justify-center transform -translate-y-16 translate-x-6">
            <img
              src="/image/circuit 1.png"
              alt="Circuit pattern background"
              className="max-w-sm w-full opacity-60 select-none"
            />
          </div>
          {/* Left-side background image (triangle) behind Community Impact */}
          <div className="pointer-events-none hidden md:flex absolute inset-y-0 left-0 w-1/4 -z-10 items-center justify-center transform -translate-y-16 -translate-x-6">
            <img
              src="/image/tri.png"
              alt="Decorative gradient triangle background"
              className="max-w-[160px] w-full opacity-60 select-none"
            />
          </div>
          {/* Header/Intro with top line */}
          <div className="relative">
            <div className="absolute left-0 top-6 h-10 w-1 bg-blue-500 rounded-full" />
            <h2 className="pl-6 text-2xl sm:text-3xl font-extrabold text-gray-900">Community Impact</h2>
            <div className="mt-2 pl-6 max-w-2xl text-gray-700">
              Matrix Smart Learning transforms education through interactive, tech‑driven solutions. We empower learners with engaging tools that make knowledge accessible, effective, and future‑ready.
            </div>

            {/* Top connector line */}
            <div className="mt-6 ml-6 h-0.5 bg-blue-400 w-full max-w-2xl" />
          </div>

          {/* Stats with connecting lines */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-10 relative">
            {/* Left block */}
            <div className="relative">
              {/* vertical line from header */}
              <div className="absolute -top-10 left-0 w-0.5 h-10 bg-blue-400" />
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900">500+</div>
              <div className="text-blue-600 font-semibold">Schools</div>
            </div>

            {/* Middle block with squared connector */}
            <div className="relative">
              {/* connector shape */}
              <div className="absolute -top-10 left-0 right-6 h-0.5 bg-blue-400" />
              <div className="absolute -top-10 right-6 w-0.5 h-10 bg-blue-400" />
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900">6000+</div>
              <div className="text-blue-600 font-semibold">installations</div>
            </div>

            {/* Right block with longer drop line */}
            <div className="relative">
              <div className="absolute -top-10 left-0 right-0 h-0.5 bg-blue-400" />
              <div className="absolute -top-10 right-0 w-0.5 h-16 bg-blue-400" />
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900">13+</div>
              <div className="text-blue-600 font-semibold">Years of excellence</div>
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