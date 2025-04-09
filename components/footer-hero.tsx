import { Github, Twitter, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FooterHero() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Invoice Generator</h2>
            <p className="text-gray-600 mb-4">
              A free tool for freelancers and small businesses to create professional invoices without any sign-up.
              Customize your branding, add your items, and download in multiple formats.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Custom Branding</li>
              <li>Multiple Export Formats</li>
              <li>Client Management</li>
              <li>Item Catalog</li>
              <li>Tax Calculation</li>
              <li>Header & Footer Customization</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Invoicing Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Invoice Generator. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for freelancers and small businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

