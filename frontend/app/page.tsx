import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-600">
          Welcome to The Church in St. Louis!
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          blah blah blah
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
