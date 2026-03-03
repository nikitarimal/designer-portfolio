import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="font-semibold text-2xl text-foreground mb-4">Page Not Found</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          Sorry, I couldn't find what you're looking for. Let's get you back on track.
        </p>
        
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
