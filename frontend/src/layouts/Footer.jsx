import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dullWhite text-black">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Task Manager</h3>
            <p className="text-gray-400">
              Helping you stay organized and productive since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orangeRed transition">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orangeRed transition">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orangeRed transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orangeRed transition">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orangeRed transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orangeRed transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orangeRed transition">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orangeRed transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/PrajwalBM01/dolist.git" className="text-gray-400 hover:text-orangeRed transition">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://x.com/PrajwalBM232626" className="text-gray-400 hover:text-orangeRed transition">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/prajwal-bm-802196256/" className="text-gray-400 hover:text-orangeRed transition">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Task Manager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer