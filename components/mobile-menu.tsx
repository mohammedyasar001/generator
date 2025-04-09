"use client"

import { useState } from "react"
import { X, FileText, Calculator } from "lucide-react"
import Link from "next/link"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  return (
    <>
      {/* Hamburger Button */}
      <button className="md:hidden text-gray-700 p-2" onClick={toggleMenu} aria-label="Menu">
        <div className="w-6 flex flex-col gap-1">
          <span className="block h-0.5 w-full bg-gray-600"></span>
          <span className="block h-0.5 w-full bg-gray-600"></span>
          <span className="block h-0.5 w-full bg-gray-600"></span>
        </div>
      </button>

      {/* Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#222222] text-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} className="text-gray-400 hover:text-white">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex justify-center mb-6">
                <div className="flex flex-col items-center">
                  <img src="/placeholder.svg?height=60&width=180" alt="Invoice Pro Logo" className="mb-3" />
                  <div className="text-sm tracking-widest mb-2">INVOICE PRO</div>
                  <h2 className="text-2xl font-bold mb-8">Finance Free Apps</h2>
                </div>
              </div>

              <div className="space-y-8">
                {/* Billing Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <FileText className="h-5 w-5 mr-2" />
                    <h3 className="text-xl font-semibold">Billing</h3>
                  </div>
                  <ul className="space-y-4 pl-7">
                    <li>
                      <Link href="#" className="block py-2 hover:bg-gray-700 hover:pl-2 transition-all">
                        Invoice Generator
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block py-2 hover:bg-gray-700 hover:pl-2 transition-all">
                        Quote Generator
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block py-2 hover:bg-gray-700 hover:pl-2 transition-all">
                        Create Receipts
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block py-2 hover:bg-gray-700 hover:pl-2 transition-all">
                        Revenue Forecaster
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Finance & Payroll Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <Calculator className="h-5 w-5 mr-2" />
                    <h3 className="text-xl font-semibold">Finance & Payroll</h3>
                  </div>
                  <ul className="space-y-4 pl-7">
                    <li>
                      <Link
                        href="#"
                        className="block py-2 bg-gray-700 border-l-4 border-yellow-500 pl-2 transition-all"
                      >
                        GST Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block py-2 hover:bg-gray-700 hover:pl-2 transition-all">
                        VAT Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block py-2 hover:bg-gray-700 hover:pl-2 transition-all">
                        Flat Rate Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block py-2 hover:bg-gray-700 hover:pl-2 transition-all">
                        Corporation Tax Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block py-2 hover:bg-gray-700 hover:pl-2 transition-all">
                        Income Tax Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block py-2 hover:bg-gray-700 hover:pl-2 transition-all">
                        Paycheck Calculator
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

