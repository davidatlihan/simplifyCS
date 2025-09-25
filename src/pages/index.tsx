import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollIndicatorRef.current) {
      const opacity = Math.max(0, 1 - scrollY / 300);
      scrollIndicatorRef.current.style.opacity = opacity.toString();
    }
  }, [scrollY]);

  return (
    <div className={`${geistSans.className} bg-black text-white overflow-x-hidden`}>
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl mb-12 lg:mb-0 lg:mr-12">
              {/* Animated Main Headline */}
              <div className="mb-8 overflow-hidden">
                <h1 
                  className="text-5xl lg:text-7xl font-bold leading-tight mb-8"
                  style={{
                    transform: `translateY(${Math.max(0, 40 - scrollY * 0.5)}px)`,
                    opacity: Math.max(0, 1 - scrollY / 600)
                  }}
                >
                  <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                    Make Software
                  </span>
                  <br />
                  <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                    Engineering
                  </span>
                  <br />
                  <span className="inline-block animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400" style={{animationDelay: '0.5s'}}>
                    Easy.
                  </span>
                </h1>
              </div>

              {/* Animated Description */}
              <div 
                className="space-y-6 text-lg leading-relaxed mb-16 overflow-hidden"
                style={{
                  transform: `translateY(${Math.max(0, 20 - scrollY * 0.3)}px)`,
                  opacity: Math.max(0, 1 - scrollY / 500)
                }}
              >
                <p className="animate-fade-in-up" style={{animationDelay: '0.7s'}}>
                  The one-stop shop for anyone looking to break into software engineering: 
                  Access all the necessary info your degree won&apos;t teach you.
                </p>
                <p className="animate-fade-in-up" style={{animationDelay: '0.9s'}}>
                  Simplify the path to big tech and avoid the fluff— SimplifyCS provides 
                  a comprehensive roadmap for everything you need to succeed in the field.
                </p>
              </div>
            </div>

            {/* Right Content - Office Image with Parallax */}
            <div 
              className="flex-1 max-w-2xl"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`
              }}
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/office-image.jpg"
                  alt="Professional software engineer working in modern office"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce"
        >
          <span className="text-sm text-gray-400 font-medium">Scroll to explore</span>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Market Message Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center">
          <div 
            className="max-w-4xl mx-auto"
            style={{
              transform: `translateY(${Math.max(-100, scrollY - 800) * 0.5}px)`,
              opacity: Math.min(1, Math.max(0, (scrollY - 500) / 300))
            }}
          >
            {/* Large Market Message */}
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
                The market isn&apos;t cooked—
              </span>
              <span className="block mt-2">
                people just don&apos;t know where to look.
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Students can no longer be satisfied with just a degree if they want to find a job. We&apos;re here to help provide the rest.
            </p>

            {/* Get Started Button */}
            <Link 
              href="/first-steps"
              className="inline-block bg-white text-black px-12 py-5 rounded-lg font-semibold text-xl hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}
