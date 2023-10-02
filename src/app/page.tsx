"use client";
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [displayedPrompt, setDisplayedPrompt] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [output, setOutput] = useState('');

  const handleButtonClick = async () => {
    setDisplayedPrompt(prompt);
    setShowInput(true);
      const response = await fetch('http://127.0.0.1:5000/api/sources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt }) // Use prompt state here
      });
      
    
  };

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
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button
                className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleButtonClick}
              >
                Show Input and Run Python Script
              </button>
            </div>
          </div>
          {showInput && (
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 text-black">
              <h2 className="text-2xl font-semibold mb-4">User Input:</h2>
              <pre className="whitespace-pre-wrap">{displayedPrompt}</pre>
            </div>
          )}
          {output && (
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 text-black">
              <h2 className="text-2xl font-semibold mb-4">Python Script Output:</h2>
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
