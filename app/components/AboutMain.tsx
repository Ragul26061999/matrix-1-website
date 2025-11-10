export default function AboutMain() {
  return (
    <section className="relative isolate overflow-hidden bg-white -ml-20 -mr-20">
      {/* decorative star top-left */}
      <div className="pointer-events-none absolute -top-6 left-6 h-10 w-10 rotate-12 rounded-lg border-2 border-blue-200" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        {/* Section heading */}
        <div className="relative mb-6 sm:mb-10">
          <p className="relative z-10 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 pt-7">About Us</p>
          <p
            className="pointer-events-none absolute left-0 top-1 sm:top-2 text-5xl sm:text-6xl font-extrabold tracking-wider text-gray-200 select-none z-0"
            aria-hidden
          >
            ABOUT US
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left image */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
              <img
                src="/image/Rectangle 22807 (1).png"
                alt="Office workspace with laptop"
                className="w-full h-[300px] sm:h-[380px] object-cover"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Our Story</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                At Matrix Smart Learning, we empower educational institutions with cutting-edge technology from global
                leaders like LG and Lenovo, delivering tailored, cost-effective solutions across Tamil Nadu and Kerala.
                Installed with over 6,000 interactive classrooms and reliable maintenance support, we ensure seamless
                learning experiences through innovation and trusted service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">What makes us stand out?</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We deliver cutting-edge, customized educational technology solutions through global brand partnerships,
                expert guidance, and a proven track record of over 6,000 classroom implementations across South India.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* right side accent bar */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-2 bg-gray-200" />
    </section>
  );
}
