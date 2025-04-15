"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import MobileMenu from "./mobile-menu"
import Image from 'next/image';
export default function HeaderHero() {
  return (
    <div className="bg-white">
      {/* Navigation Bar - Made Sticky - Desktop & Tablet Only */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Left side - Title and subtitle */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Free Invoice Generator</h1>
            <p className="text-sm text-gray-600">By Invoice Pro</p>
          </div>

          {/* Right side - CTA links (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#features" className="text-blue-600 hover:text-blue-800 font-medium">
              Check out Invoice Pro
            </Link>
            <Link
              href="#signup"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded uppercase font-bold text-sm"
            >
              Sign up for free trial
            </Link>
          </div>

          {/* Mobile Menu (visible only on mobile) */}
          <MobileMenu />
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">Create Professional Invoices in Minutes</h1>

            <p className="text-gray-600 text-xl">
              Free, simple, and powerful invoice generator. No login required.
              <br />
              Download in multiple formats.
            </p>

            <button
              className="bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium flex items-center"
              onClick={() => document.getElementById("invoice-form-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center">
                <span className="font-medium">100% Free</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium">No Login Required</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium">Multiple Formats</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
  <div className="relative">
    {/* Replace placeholder divs with Image component */}
    <Image
      src="/public/invoice-preview.png" // Path to your image in public folder
      alt="Invoice Generator Preview"
      width={800} // Adjust to match your image dimensions
      height={600}
      className="rounded-lg shadow-lg mx-auto max-w-md"
      priority // Optional: if this image is above the fold
    />
  </div>
</div>
        </div>
      </div>
    </div>
  )
}

