export default function Testimonials() {
  const items = [
    {
      quote:
        "Seamless integration and unmatched support! The training programs were incredibly effective.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
      name: "",
    },
    {
      quote:
        "Improved student engagement significantly. Transformed our classroom experience completely.",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
      name: "",
    },
    {
      quote:
        "Scalable, secure, and remarkably easy to deploy. High-performance projectors and essential accessories.",
      avatar:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=400&auto=format&fit=crop",
      name: "",
    },
    {
      quote:
        "Top‑notch service with excellent customer support. Improved our student engagement significantly.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      name: "",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white -ml-20 -mr-20">
      {/* Background watermark */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-4 left-4 text-6xl sm:text-7xl font-extrabold tracking-wider text-gray-200/60 select-none">
          TESTIMONIALS
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-11">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Testimonials</h2>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((t, idx) => (
            <figure key={idx} className="flex flex-col gap-4">
              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`h-4 w-4 ${i === 4 ? 'opacity-60' : ''}`}
                  >
                    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.55a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.487a.562.562 0 01-.84-.61l1.285-5.385a.563.563 0 00-.182-.557L3.04 10.385a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345l2.125-5.111z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-800 leading-relaxed text-sm">
                “{t.quote}”
              </blockquote>

              {/* Avatar */}
              <figcaption className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt="Reviewer avatar"
                  className="h-10 w-10 rounded-full object-cover"
                />
                {t.name && <span className="text-sm font-medium text-gray-900">{t.name}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
