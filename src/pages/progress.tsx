import Link from "next/link";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Progress() {
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
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Track Your Progress</h1>
        <p className="text-xl text-gray-300 mb-12">to implement: achievements, </p>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <Link 
            href="/roadmap"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            ← View Roadmap
          </Link>
          <Link 
            href="/first-steps"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Continue Learning →
          </Link>
        </div>
      </main>
    </div>
  );
}
