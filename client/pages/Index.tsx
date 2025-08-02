import { useState } from "react";
import { Search, Mic, Camera } from "lucide-react";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would perform a search
    console.log("Searching for:", searchQuery);
  };

  const handleFeelingLucky = () => {
    // In a real implementation, this would navigate to a random page
    console.log("I'm Feeling Lucky clicked");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 text-sm">
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:underline">
            About
          </a>
          <a href="#" className="text-gray-700 hover:underline">
            Store
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:underline">
            Gmail
          </a>
          <a href="#" className="text-gray-700 hover:underline">
            Images
          </a>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-6 h-6 fill-gray-600" viewBox="0 0 24 24">
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
            </svg>
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
            Sign in
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 -mt-16">
        {/* Google Logo */}
        <div className="mb-8">
          <svg
            className="w-72 h-24"
            viewBox="0 0 272 92"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                fill="#EA4335"
              />
              <path
                d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                fill="#FBBC05"
              />
              <path
                d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                fill="#4285F4"
              />
              <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
              <path
                d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                fill="#EA4335"
              />
              <path
                d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
                fill="#4285F4"
              />
            </g>
          </svg>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="w-full max-w-[584px] mb-8">
          <div className="relative">
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-3 hover:shadow-md focus-within:shadow-md transition-shadow">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none text-base"
                autoComplete="off"
              />
              <div className="flex items-center space-x-3 ml-3">
                <button
                  type="button"
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <Mic className="w-5 h-5 text-gray-500" />
                </button>
                <button
                  type="button"
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <Camera className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Buttons */}
        <div className="flex space-x-4 mb-8">
          <button
            type="button"
            onClick={handleSearch}
            className="bg-gray-50 border border-gray-50 rounded px-5 py-3 text-sm text-gray-700 hover:shadow-sm hover:border-gray-200 transition-all"
          >
            Google Search
          </button>
          <button
            type="button"
            onClick={handleFeelingLucky}
            className="bg-gray-50 border border-gray-50 rounded px-5 py-3 text-sm text-gray-700 hover:shadow-sm hover:border-gray-200 transition-all"
          >
            I'm Feeling Lucky
          </button>
        </div>

        {/* Language Options */}
        <div className="text-sm text-gray-600">
          Google offered in:{" "}
          <a href="#" className="text-blue-600 hover:underline">
            العربية
          </a>{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Français
          </a>{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Español
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="py-3 px-8 text-sm text-gray-600 border-b border-gray-200">
          <span>United States</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center py-3 px-8 text-sm text-gray-600 space-y-2 md:space-y-0">
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">
              Advertising
            </a>
            <a href="#" className="hover:underline">
              Business
            </a>
            <a href="#" className="hover:underline">
              How Search works
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Settings
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
