export default function OurCommunity() {
  return (
    <section className="relative isolate overflow-hidden bg-white -ml-20 -mr-20">
      {/* soft top background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-0 right-0 h-40 bg-gradient-to-b from-gray-100 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Our Community</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative rounded-xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
            <div className="flex justify-center ">
              <div className="h-32 w-32 rounded-full overflow-hidden ring-4 ring-white bg-gray-100">
                <img
                  src="/image/team-1.jpg"
                  alt="Meenakshi Sundaram"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="px-6 pb-6 pt-14">
              <h3 className="text-lg font-semibold text-gray-900">Meenakshi Sundaram</h3>
              <p className="text-sm text-gray-500">Chairwoman</p>
              <p className="mt-4 text-gray-700 leading-relaxed text-sm">
                “Quality education begins with the right tools. From interactive displays to high‑performance projectors,
                we provide reliable, cutting‑edge solutions tailored to modern learning environments.”
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
            <div className="flex justify-center ">
              <div className="h-32 w-32 rounded-full overflow-hidden ring-4 ring-white bg-gray-100">
                <img
                  src="/image/team-2.jpg"
                  alt="John Timber"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="px-6 pb-6 pt-14 text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900">John Timber</h3>
              <p className="text-sm text-gray-500">Chief Designer</p>
              <p className="mt-4 text-gray-700 leading-relaxed text-sm">
                “The classroom of tomorrow demands smart solutions today. With our expertise, we help educators stay ahead
                in an increasingly digital world.”
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
            <div className="flex justify-center ">
              <div className="h-32 w-32 rounded-full overflow-hidden ring-4 ring-white bg-gray-100">
                <img
                  src="/image/team-3.jpg"
                  alt="Rohan Mehra"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="px-6 pb-6 pt-14 text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900">Rohan Mehra</h3>
              <p className="text-sm text-gray-500">Product Manager</p>
              <p className="mt-4 text-gray-700 leading-relaxed text-sm">
                “Education is evolving, and so are we. By integrating advanced tools like interactive flat panels and smart
                projectors, we’re redefining classrooms for the digital age.”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* subtle corner accent */}
      <div className="absolute left-6 bottom-6 h-10 w-10 rotate-12 rounded-2xl bg-indigo-100" />
    </section>
  );
}
