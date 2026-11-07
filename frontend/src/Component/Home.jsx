import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Headphones,
  MapPin,
  Play,
  ShieldCheck,
  Sparkles,
  Ticket,
  Users,
  Zap,
} from 'lucide-react'
import { useEffect,useState } from 'react'
import Navbar from './Navbar'


const events = [
  {
    name: 'Music Festival 2026',
    date: 'Nov 10, 2026',
    location: 'Mumbai, India',
    tag: 'Live Now',
    color: 'bg-violet-600',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=85',
    alt: 'Crowd enjoying a live music festival',
  },
  {
    name: 'Tech Summit 2026',
    date: 'Nov 15, 2026',
    location: 'Bangalore, India',
    tag: 'Upcoming',
    color: 'bg-sky-500',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=85',
    alt: 'Technology conference auditorium',
  },
  {
    name: 'Royal Wedding Expo',
    date: 'Nov 20, 2026',
    location: 'Delhi, India',
    tag: 'Popular',
    color: 'bg-rose-500',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
    alt: 'Elegant wedding venue decorated with flowers',
  },
  {
    name: 'Art & Culture Fest',
    date: 'Nov 25, 2026',
    location: 'Kolkata, India',
    tag: 'Featured',
    color: 'bg-emerald-500',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85',
    alt: 'Colorful artwork at an art exhibition',
  },
]

const benefits = [
  {
    title: 'Easy Booking',
    description: 'Book your favorite events with just a few clicks.',
    Icon: CalendarDays,
  },
  {
    title: 'Secure & Reliable',
    description: 'Your data and payments are always safe.',
    Icon: ShieldCheck,
  },
  {
    title: 'Instant Access',
    description: 'Get your tickets instantly and never miss out.',
    Icon: Zap,
  },
  {
    title: '24/7 Support',
    description: "Need help? We're here anytime, anywhere.",
    Icon: Headphones,
  },
]


function Home() {
  const [event, setevent] = useState([])
useEffect(() => {
  async function getdata() {
    let data = await fetch('https://arman-ahmad.onrender.com/event')
    let res = await data.json()
  
   setevent(res)
   console.log(res)
  }
  getdata()

}, [])
  return (
    <main id="home" className="relative min-h-screen overflow-hidden bg-[#fcfbff] text-slate-950">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-violet-100/70 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 top-24 h-80 w-80 rounded-full bg-purple-100/70 blur-3xl" />
      <Navbar />

      <section className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-12 pt-8 sm:px-8 md:grid-cols-2 md:gap-6 md:pb-16 md:pt-12 lg:px-12">
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            <Sparkles size={16} fill="currentColor" />
            Your Event, Our Priority
          </div>
          <h1 className="max-w-xl text-5xl font-extrabold leading-[1.04] tracking-tight text-slate-950 sm:text-6xl lg:text-[4.25rem]">
            Book Events
            <br />
            That <span className="text-violet-600">Inspire</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-slate-600 sm:text-lg">
            Explore trending events, book in seconds, and be part of something great.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a href="#events" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700">
              Find Events <ArrowRight size={17} />
            </a>
            <button className="inline-flex items-center gap-2.5 text-sm font-medium text-slate-700 transition hover:text-violet-700">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-violet-700 shadow-sm">
                <Play size={14} fill="currentColor" />
              </span>
              Watch Demo
            </button>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-slate-600">
            <span className="flex -space-x-2">
              {['photo-1534528741775-53994a69daeb', 'photo-1500648767791-00dcc994a43e', 'photo-1531123897727-8f129e1688ce'].map((photo) => (
                <img key={photo} src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=80&h=80&q=80`} alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
              ))}
            </span>
            <span><strong className="text-slate-900">10k+</strong> happy event-goers</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl md:ml-auto">
          <div aria-hidden="true" className="absolute -inset-5 rotate-[-8deg] rounded-[36%] bg-violet-200/80" />
          <div aria-hidden="true" className="absolute -inset-1 rotate-[5deg] rounded-[2rem] border-2 border-violet-400/70" />
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=90"
            alt="Audience attending a large conference"
            className="relative aspect-[1.45] w-full rotate-[-3deg] rounded-[1.6rem] object-cover shadow-2xl shadow-violet-300/40"
          />
          <div className="absolute -right-1 top-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-right-5 sm:top-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <Users size={21} />
            </span>
            <span>
              <strong className="block text-lg leading-5">1M+</strong>
              <span className="text-xs text-slate-500">Happy Attendees</span>
            </span>
          </div>
          <div className="absolute -bottom-5 left-2 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg sm:left-0">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Check size={17} />
            </span>
            <span className="text-sm font-semibold text-slate-800">Trusted by event lovers</span>
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto w-full max-w-7xl px-5 pb-8 pt-3 sm:px-8 lg:px-12">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-violet-600">Don&apos;t miss out</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Trending Events</h2>
            <div className="mt-2 h-1 w-20 rounded-full bg-violet-600" />
          </div>
          <a href="#events" className="mb-1 inline-flex items-center gap-1 text-sm font-semibold text-violet-700 hover:text-violet-900">
            View All <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {event.map((item)=>{
          return (
            <>
           <div className='w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm'>
            <div className='relative h-44'>
              <img src={item.image} alt="" className='h-full w-full object-cover' />
              <span className='absolute left-4 top-4 rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold text-white'>{item.status}</span>

            </div>
            <div className='flex items-center justify-between p-4'>
              {item.title}

            </div >
            <div className='flex justify-between p-4'>

          <p>{item.date}</p>
          <p>{item.location}</p>
            </div>

           </div>
           
            
            </>
          )
         })} 
        </div>
      </section>

      <section id="about" className="mx-auto mb-8 mt-2 grid w-full max-w-7xl grid-cols-1 divide-y divide-violet-200 rounded-3xl bg-violet-50 px-5 py-3 sm:mx-8 sm:w-auto sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-2 lg:mx-auto lg:grid-cols-4 lg:px-3">
        {benefits.map(({ title, description, Icon }) => (
          <div key={title} className="flex items-center gap-3 px-4 py-4 sm:px-5 lg:px-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-200/80 text-violet-700">
              <Icon size={23} strokeWidth={2.3} />
            </span>
            <span>
              <strong className="block text-sm font-bold text-slate-900">{title}</strong>
              <span className="mt-1 block text-xs leading-4 text-slate-600">{description}</span>
            </span>
          </div>
        ))}
      </section>
      <span id="blog" className="sr-only"><Ticket /> Event stories</span>
      <span id="contact" className="sr-only">Contact Eventify support</span>
    </main>
  )
}

export default Home
