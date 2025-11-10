"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

const products = [
  {
    title: "Interactive Flat Panel",
    desc: "This is the best product in its segment, designed with highly attractive features.",
    img: "/image/Rectangle 22804.png",
    category: "Displays",
    price: 1200,
  },
  {
    title: "UV White board",
    desc: "The good product in its line, designed with highly professional and attractive features.",
    img: "/image/Rectangle 22805.png",
    category: "Boards",
    price: 800,
  },
  {
    title: "Visualizer",
    desc: "This is the best product in its segment, designed with highly attractive features.",
    img: "/image/Rectangle 22807.png",
    category: "Tools",
    price: 600,
  },
  {
    title: "Interactive full Panel",
    desc: "The good product in its line, designed with highly professional and attractive features.",
    img: "/image/Rectangle 22807 (1).png",
    category: "Displays",
    price: 1500,
  },
  {
    title: "Led 4K",
    desc: "this is the best product in its segment, designed with highly attractive features.",
    img: "/image/Rectangle 22805.png",
    category: "Displays",
    price: 2000,
  },
  {
    title: "TV Monitor",
    desc: "The good product in its line, designed with highly professional and attractive features.",
    img: "/image/teacher 1.png",
    category: "Monitors",
    price: 900,
  },
  {
    title: "Smart Display Solution",
    desc: "Advanced display technology for modern classrooms and presentations.",
    img: "/image/Rectangle 22804.png",
    category: "Displays",
    price: 1800,
  },
  {
    title: "Digital Whiteboard",
    desc: "Interactive whiteboard for collaborative learning environments.",
    img: "/image/Rectangle 22807.png",
    category: "Boards",
    price: 1100,
  },
  {
    title: "Projection System",
    desc: "High-quality projection system for large venue presentations.",
    img: "/image/Rectangle 22807 (1).png",
    category: "Projectors",
    price: 2500,
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category))).sort()];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory === "All" ? products : products.filter(p => p.category === selectedCategory);
    
    if (sortBy === "name") {
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "price") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    }
    
    return filtered;
  }, [selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative isolate">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl">
          <div className="relative h-[220px] sm:h-[260px] md:h-[320px]">
            <Image
              src="/image/Product page.png"
              alt="Products Hero Background"
              fill
              className="object-cover"
              priority
            />

            {/* Diamond shapes */}
            <Image
              src="/image/Rectangle 22807.png"
              alt=""
              width={110}
              height={110}
              className="pointer-events-none absolute -left-7 top-10 hidden rotate-12 opacity-70 sm:block"
            />
            <Image
              src="/image/Rectangle 22807 (1).png"
              alt=""
              width={110}
              height={110}
              className="pointer-events-none absolute -right-7 bottom-8 hidden -rotate-12 opacity-70 sm:block"
            />

            {/* Text */}
            <div className="absolute inset-0 grid place-items-center px-6 text-center text-white">
              <div className="mx-auto max-w-2xl">
                <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
                  3 year replacement warranty!
                </h1>
                <p className="mt-2 text-xs text-gray-100 sm:text-sm">
                  on all our products
                </p>
                <Link
                  href="#catalog"
                  className="mt-5 inline-block rounded-md bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm backdrop-blur hover:bg-white"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <div className="mx-auto mt-6 flex max-w-7xl items-center justify-end gap-3 px-1 sm:px-0">
        <select
          value={selectedCategory}
          onChange={(e) => handleFilterChange(e.target.value)}
          className="rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
          className="rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      {/* Grid */}
      <section id="catalog" className="mx-auto mt-6 max-w-7xl space-y-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {paginatedProducts.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={900}
                  height={600}
                  className="h-56 w-full rounded-xl object-cover md:h-64 aspect-[3/2]"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">{p.desc}</p>
                </div>
                <button className="whitespace-nowrap rounded-md bg-gray-900 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-gray-800">
                  Know more.
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => handlePageChange(n)}
              className={`h-8 w-8 rounded border text-xs font-medium transition-colors ${
                n === currentPage
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </section>

      {/* bottom spacing similar to design */}
      <div className="h-10 md:h-16" />
    </div>
  );
}
