'use client';
import { MapPin, Phone, Mail } from 'lucide-react';

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
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-black">
                  <MapPin className="h-4 w-4" />
                </span>
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
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-black">
                  <MapPin className="h-4 w-4" />
                </span>
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
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-black">
                  <Phone className="h-4 w-4" />
                </span>
                <p className="text-gray-700 text-sm">
                  Matrix Smart Learning: <span className="font-semibold">+91 8489918000</span> for inquiries.
                </p>
              </div>
              <div className="mt-3 flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-black">
                  <Mail className="h-4 w-4" />
                </span>
                <p className="text-gray-700 text-sm">matrixeduworld@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl p-6 overflow-hidden">
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(255,255,255,0.7))] backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent_70%)]"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-blue-600 text-center mb-2">GET IN TOUCH</h3>
              <p className="text-center text-blue-800/70 text-sm mb-6">We&apos;ll get back to you as soon as possible</p>
              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <label htmlFor="name" className="sr-only">Name</label>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-md border border-gray-300 bg-white pl-10 py-2 pr-4 outline-none ring-0 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="relative">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="your Gmail address"
                    className="w-full rounded-md border border-gray-300 bg-white pl-10 py-2 pr-4 outline-none ring-0 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    placeholder="Enter your message here"
                    rows={5}
                    className="w-full rounded-lg border-0 bg-white/80 backdrop-blur-sm px-4 py-3 outline-none ring-1 ring-blue-200/50 focus:ring-2 focus:ring-blue-400/50 transition-all duration-200"
                    required
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
