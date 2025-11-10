'use client';
export default function ContactUs() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Top intro text */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <p className="text-center text-gray-700">
          <span className="text-blue-500"><b>F</b></span>or inquiries, support, or to learn more about our innovative educational solutions, please reach out to our
          dedicated team. We’re here to assist you in transforming your learning environment.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative mb-6 sm:mb-10">
              <p className="relative z-10 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 pt-7">Contact</p>
              <p
                className="pointer-events-none absolute left-0 top-1 sm:top-2 text-5xl sm:text-6xl font-extrabold tracking-wider text-gray-200 select-none z-0"
                aria-hidden
              >
                CONTACT
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white shadow-sm p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-700">📍</span>
                <div>
                  <p className="font-semibold text-gray-900">Office in Tirunelveli</p>
                  <p className="text-gray-700 text-sm">
                    182E-6, Rajarishi Complex, S.N High Road, Tirunelveli, 627001
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white shadow-sm p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-700">📍</span>
                <div>
                  <p className="font-semibold text-gray-900">Office in Coimbatore</p>
                  <p className="text-gray-700 text-sm">
                    173, Nanjundapuram Road, Ramanathapuram, Coimbatore, 641045
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white shadow-sm p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-700">📞</span>
                <p className="text-gray-700 text-sm">
                  Matrix Smart Learning: <span className="font-semibold">+91 8489918000</span> for inquiries.
                </p>
              </div>
              <div className="mt-3 flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-700">✉️</span>
                <p className="text-gray-700 text-sm">matrixeduworld@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-6">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
              <h3 className="text-xl font-extrabold text-blue-600 text-center">GET IN TOUCH</h3>
              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 outline-none ring-0 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your Gmail address"
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 outline-none ring-0 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    placeholder="Enter your message here"
                    rows={5}
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 outline-none ring-0 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-6 py-2 text-sm font-semibold shadow-sm hover:bg-blue-700"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
