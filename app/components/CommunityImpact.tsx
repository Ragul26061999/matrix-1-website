export default function CommunityImpact() {
  return (
    <section className="relative isolate overflow-hidden bg-white -ml-20 -mr-20">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-3xl bg-gradient-to-br from-indigo-100 to-white blur-2xl" />
        <div className="hidden sm:block absolute top-6 right-8 h-40 w-64 opacity-40" style={{backgroundImage: 'linear-gradient(135deg, #e5e7eb 12.5%, rgba(0,0,0,0) 12.5%), linear-gradient(225deg, #e5e7eb 12.5%, rgba(0,0,0,0) 12.5%), linear-gradient(45deg, #e5e7eb 12.5%, rgba(0,0,0,0) 12.5%), linear-gradient(315deg, #e5e7eb 12.5%, #ffffff 12.5%)', backgroundPosition: '10px 0, 10px 0, 0 0, 0 0', backgroundSize: '10px 10px', backgroundRepeat: 'repeat'}} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
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
  );
}
