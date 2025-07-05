import React from 'react';

const DevBlog: React.FC = () => {
  return (
    <section id="devblog" className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
          Dev Blog
        </h1>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Welcome to my development blog! Here I share insights, tutorials, and experiences from my coding journey.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Sample blog posts */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Building Interactive UIs with React Spring</h3>
            <p className="text-gray-300 mb-4">Exploring animation libraries and creating smooth, engaging user experiences.</p>
            <span className="text-sm text-purple-400">Coming Soon</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">TypeScript Best Practices</h3>
            <p className="text-gray-300 mb-4">Tips and tricks for writing cleaner, more maintainable TypeScript code.</p>
            <span className="text-sm text-blue-400">Coming Soon</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Tailwind CSS Advanced Techniques</h3>
            <p className="text-gray-300 mb-4">Deep dive into utility-first CSS and creating complex layouts.</p>
            <span className="text-sm text-green-400">Coming Soon</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">API Integration Patterns</h3>
            <p className="text-gray-300 mb-4">Modern approaches to handling API calls and state management.</p>
            <span className="text-sm text-yellow-400">Coming Soon</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
            <p className="text-gray-300 mb-4">Techniques for building fast, responsive web applications.</p>
            <span className="text-sm text-red-400">Coming Soon</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">My Development Journey</h3>
            <p className="text-gray-300 mb-4">Reflections on learning, growing, and building amazing projects.</p>
            <span className="text-sm text-indigo-400">Coming Soon</span>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-gray-400 text-lg">
            Stay tuned for more content! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevBlog;
