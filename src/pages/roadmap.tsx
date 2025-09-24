import Link from "next/link";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Roadmap() {
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
      <main className="px-6 py-12 max-w-4xl mx-auto pt-24">
        {/* Title Box */}
        <div className="bg-white text-black p-8 rounded-lg text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Official Roadmap</h1>
          <p className="text-lg">Step-by-Step guide to becoming a Software Engineer in 2025</p>
        </div>

        {/* Flowchart */}
        <div className="flex flex-col items-center space-y-8">
          {/* Arrow pointing down from title */}
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Beginner Step */}
          <div className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg">
            placeholder
          </div>

          {/* Arrow pointing down from Beginner */}
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Technical Skills Step */}
          <div className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg">
            placeholder
          </div>

          {/* Branching Paths from Technical Skills */}
          <div className="flex justify-center items-start space-x-8 mt-4">
            <div className="flex flex-col items-center">
              <div className="w-24 h-1 bg-white mb-2"></div>
              <div className="bg-white text-black px-4 py-2 rounded text-sm font-medium">
                placeholder
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-1 bg-white mb-2"></div>
              <div className="bg-white text-black px-4 py-2 rounded text-sm font-medium">
                Data Structures
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-1 bg-white mb-2"></div>
              <div className="bg-white text-black px-4 py-2 rounded text-sm font-medium">
                Algorithms
              </div>
            </div>
          </div>

          {/* Arrow pointing down from Technical Skills */}
          <div className="flex flex-col items-center mt-8">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Projects Step */}
          <div className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg">
            Projects & Portfolio
          </div>

          {/* Arrow pointing down from Projects */}
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Interview Prep Step */}
          <div className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg">
            Interview Preparation
          </div>

          {/* Arrow pointing down from Interview Prep */}
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Job Search Step */}
          <div className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg">
            placeholder
          </div>

          {/* Arrow pointing down from Job Search */}
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Final Step */}
          <div className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg">
            placeholder
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <Link 
            href="/first-steps"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            ← Back to First Steps
          </Link>
          <Link 
            href="/progress"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Track Progress →
          </Link>
        </div>
      </main>
    </div>
  );
}
