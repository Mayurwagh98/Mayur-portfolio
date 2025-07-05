const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] z-[100] flex items-center justify-center">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Loading content */}
      <div className="relative z-10 text-center">
        {/* Profile image placeholder */}
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-1 animate-spin">
          <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
              <span className="text-2xl font-bold">MW</span>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Mayur Wagh
        </h1>
        <p className="text-gray-400 mb-8 text-lg">MERN Stack Developer</p>

        {/* Loading animation */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Loading progress bar */}
        <div className="w-64 h-1 bg-[#2a2a2a] rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse"></div>
        </div>

        <p className="text-gray-500 mt-4 text-sm animate-pulse">
          Loading portfolio...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
