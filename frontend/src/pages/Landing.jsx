import React from 'react'
import Footer from '../layouts/Footer'
import { FaCheckCircle, FaClock, FaUsers } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6 my-10 text-center">
        <h1 className="text-5xl font-bold text-black mb-8">
          Organize Your Tasks, <br />
          <span className="text-orangeRed">Achieve Your Goals</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          A simple yet powerful task management tool to help you stay organized and boost your productivity.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Our Task Manager?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaCheckCircle className="text-4xl text-orangeRed mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Simple & Intuitive</h3>
            <p className="text-black">
              Easy to use interface that helps you focus on what matters most.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaClock className="text-4xl text-orangeRed mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Time Management</h3>
            <p className="text-black">
              Track your time and stay on top of your deadlines effortlessly.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaUsers className="text-4xl text-orangeRed mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Team Collaboration</h3>
            <p className="text-black">
              Work together seamlessly with your team members.
            </p>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Landing