// src/pages/index.tsx
import React from 'react';

  const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <header className="text-center py-10">
        <h1 className="text-4xl font-semibold text-indigo-700">Sourceify</h1>
        <p className="text-gray-500">Find sources for your prompts</p>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6 max-w-md">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topic">
                Enter a topic or prompt
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="topic"
                type="text"
                placeholder="Find me sources for..."
              />
            </div>
            <div className="text-center">
              <button
                className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
