import { useState } from "react";
import Link from "next/link";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

type Category = "Technical Skills" | "Projects/Experience" | "Interview Prep";

const categoryContent = {
  "Technical Skills": `placeholder text`,
  
  "Projects/Experience": `placeholder text`,
  
  "Interview Prep": `placeholder text`
};

export default function FirstSteps() {
  const [activeCategory, setActiveCategory] = useState<Category>("Technical Skills");

  return (
    <div className={`${geistSans.className} min-h-screen bg-black text-white`}>
      {/* Navigation Header - Fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-semibold">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            SimplifyCS
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/roadmap" className="hover:text-gray-300 transition-colors">
              Roadmap
            </Link>
            <Link href="/first-steps" className="hover:text-gray-300 transition-colors">
              Get Started
            </Link>
            <Link href="/progress" className="hover:text-gray-300 transition-colors">
              Track Your Progress
            </Link>
          </nav>

          {/* Login Button */}
          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            log in
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-12 max-w-6xl mx-auto pt-24">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">First Steps</h1>
          <p className="text-xl text-gray-300">Contrary to popular belief, the market isn't cooked—most people just don't know where to look. Here's everything you should know before we start:</p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          {(Object.keys(categoryContent) as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeCategory === category
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Display Area */}
        <div className="bg-white text-black p-8 rounded-lg min-h-[400px] mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">{activeCategory}</h2>
            <div className="whitespace-pre-line leading-relaxed">
              {categoryContent[activeCategory]}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <Link 
            href="/roadmap"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Next →
          </Link>
        </div>
      </main>
    </div>
  );
}
