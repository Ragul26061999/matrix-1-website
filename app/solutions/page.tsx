import Image from "next/image";
import Link from "next/link";


type BlockProps = {
  title: string;
  description: string;
  cta: string;
  image: string;
  reverse?: boolean;
}

function SolutionBlock({ title, description, cta, image, reverse }: BlockProps) {
  return (
    <section className="relative">
      {/* Side decorative gradient shapes */}
      <div
        className={`pointer-events-none absolute inset-y-0 -left-24 hidden h-full w-56 md:block ${
          reverse ? "md:hidden" : ""
        }`}
        aria-hidden
      >
        <Image
          src="/image/s7.png"
          alt=""
          fill
          className="object-contain opacity-70"
        />
      </div>
      <div
        className={`pointer-events-none absolute inset-y-0 -right-24 hidden h-full w-56 md:block ${
          reverse ? "" : "md:hidden"
        }`}
        aria-hidden
      >
        <Image
          src="/image/s8.png"
          alt=""
          fill
          className="object-contain opacity-70"
        />
      </div>

      <div
        className={`relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 rounded-2xl bg-white/90 p-4 shadow-sm md:grid-cols-2 md:p-6`}
      >
        {/* Image */}
        <div className="overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            width={900}
            height={600}
            className="h-full w-full rounded-xl object-cover"
            priority
          />
        </div>
        {/* Content */}
        <div className="px-1 md:px-4">
          <h3 className="text-xl font-semibold text-gray-900 md:text-2xl">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-gray-600 md:text-base">
            {description}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Link
              href="#"
              className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800"
            >
              {cta}
            </Link>
          </div>
          <div className="mt-4">
            <Image
              src="/image/brands logo.png"
              alt="Partner Brands"
              width={150}
              height={100}
              className="h-auto w-[300px] max-w-xs object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SolutionsPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative isolate">
        <div className="relative mx-auto max-w-full overflow-hidden rounded-2xl">
          {/* Background */}
          <div className="relative h-[220px] sm:h-[260px] md:h-[320px]">
            <Image
              src="/image/walpaper.png"
              alt="Solutions Background"
              fill
              className="object-cover"
              priority
            />

            {/* Decorative shapes */}
            <Image
              src="/image/o1.png"
              alt=""
              width={120}
              height={120}
              className=" absolute left-70 -top-4 hidden rotate-12 opacity-100 sm:block"
            />
            <Image
              src="/image/o2.png"
              alt=""
              width={120}
              height={120}
              className="pointer-events-none absolute right-70 -bottom-4 hidden -rotate-12 opacity-100 sm:block"
            />

            {/* Content */}
            <div className="absolute inset-0 grid place-items-center px-6 text-center text-white">
              <div className="mx-auto max-w-3xl">
                <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                  Our Solutions
                </h1>
                <p className="mt-3 text-xs leading-6 text-blue-100 sm:text-sm md:text-base">
                  Unlock the future of education with Matrix Solutions! Explore our innovative
                  technology offerings designed for dynamic learning experiences. Discover tailored
                  solutions that empower educators and engage students, anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content blocks */}
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-10 md:mt-14 md:gap-14">
        <SolutionBlock
          title="Smart Classroom Solutions"
          description="High-definition projectors designed for seamless integration in modern classrooms. These systems significantly improve lesson delivery, increasing student engagement, and enhancing quality of interactive learning."
          cta="Products"
          image="/image/s1.png"
          
        />

        <SolutionBlock
          title="IT Solutions"
          description="Network and digital solutions that power your digital campus. From secure Wi‑Fi to device management and cloud services, we ensure smooth performance for teaching and administration."
          cta="Products"
          image="/image/s2.png"
          reverse={true}
        />

        <SolutionBlock
          title="Lab Solutions"
          description="Smart Classroom Systems / Comprehensive solutions that transform laboratories, enabling hands‑on learning with modern devices and software integration."
          cta="Products"
          image="/image/s3.png"
          
        />

        <SolutionBlock
          title="Audio Video Solutions"
          description="Professional AV setups that deliver crystal‑clear visuals and immersive sound, creating dynamic classrooms and auditoriums that enhance collaboration and presentations."
          cta="Products"
          image="/image/s4.png"
          reverse={true}
        />

        <SolutionBlock
          title="Students career guidance"
          description="Personalized guidance solutions to help students choose the right academic and career path through assessments, mentorship, and curated resources."
          cta="Read"
          image="/image/s5.png"
          
        />

        <SolutionBlock
          title="Teachers Professional development training"
          description="Continuous professional development programs for teachers that improve pedagogy, increase collaboration, and enhance classroom management."
          cta="Read"
          image="/image/s6.png"
          reverse={true}
        />
      </div>

      {/* Footer callout spacing mimic as in design */}
      <div className="h-10 md:h-16" />
    </div>
  );
}

