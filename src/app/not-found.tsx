export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          404
        </h1>
        <h2 className="text-2xl mb-8">Page Not Found</h2>
        <a
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white hover:opacity-90 transition-opacity"
        >
          Return Home
        </a>
      </div>
    </div>
  )
} 