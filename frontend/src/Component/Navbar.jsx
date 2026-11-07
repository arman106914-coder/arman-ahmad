import { Play, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
      <Link to="/" className="flex items-center gap-2.5 text-slate-950">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-200">
          <Play size={19} fill="currentColor" strokeWidth={2.5} />
        </span>
        <span className="text-xl font-extrabold tracking-tight">Eventify</span>
      </Link>

      <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
        <a href="#home" className="border-b-2 border-violet-600 py-2 text-violet-700">Home</a>
        <a href="#events" className="py-2 text-slate-600 transition hover:text-violet-700">Events</a>
        <a href="#about" className="py-2 text-slate-600 transition hover:text-violet-700">About</a>
        <a href="#blog" className="py-2 text-slate-600 transition hover:text-violet-700">Blog</a>
        <a href="#contact" className="py-2 text-slate-600 transition hover:text-violet-700">Contact</a>
      </nav>

      <div className="flex items-center gap-3">
        <button aria-label="Search events" className="rounded-full p-2 text-slate-700 transition hover:bg-violet-50 hover:text-violet-700">
          <Search size={20} />
        </button>
        <Link to="/login" className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:bg-violet-700">
          Sign In
        </Link>
      </div>
    </header>
  )
}

export default Navbar
