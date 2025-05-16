export default function Footer() {
  return (
    <footer className="py-8 glass border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-text-secondary">
          &copy; {new Date().getFullYear()} Niswan G. All rights reserved.
        </p>
        <p className="text-text-secondary/70 text-sm mt-2">
          Designed and built by Niswan G using Next.js, Tailwind CSS, and Framer Motion
        </p>
      </div>
    </footer>
  )
}
