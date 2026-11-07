import { useState,useEffect } from 'react'
import { ArrowLeft, ArrowRight, CalendarDays, Check, LockKeyhole, Mail, Play, Server, Sparkles, UserRound, Users } from 'lucide-react'
import { Link, replace, useNavigate } from 'react-router-dom'



const Login = () => {
  const navigate = useNavigate()
  const [isSignup, setIsSignup] = useState(false)
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

   async function handleSubmit(event) {
   
    event.preventDefault()
    const userdata = {username,email,password}
    try{
      const res = await fetch('http://localhost:3000/user',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(userdata)
      })
      if(res.ok){
        const result = await res.json()
        console.log('succses',result)
       
          navigate('/Home',{replace:true})
      }
      else{
        console.log('server',res.statusText)
      }
    }
    catch(err){
      console.log(err)
    }
    
  }
 
const login = async (event)=>{
 alert("clicked")
    const userdata = {email,password}
    try{
      const res = await fetch('http://localhost:3000/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(userdata)
      })
     const result = await res.json()
     console.log(res.status)
   
     alert(result,JSON.stringify)
     if(res.ok){
    
      navigate("/Home",{replace:true})
     }
     else{

       alert("server err",result.message)
     }
    }catch(err){
      console.log(err)
    }
    }
  return (
    <main className="relative flex min-h-svh flex-col items-center overflow-hidden bg-[#f8f6ff] px-4 py-6 text-slate-950 sm:px-8 sm:py-8 lg:justify-center">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-200/60 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -right-28 h-[30rem] w-[30rem] rounded-full bg-purple-200/60 blur-3xl" />

      <Link to="/Home" className="relative z-10 mb-4 inline-flex w-full max-w-5xl items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-violet-700 md:max-w-xl lg:mb-5 lg:max-w-5xl">
        <ArrowLeft size={17} /> Back to home
      </Link>

      <section className="relative grid w-full max-w-xl overflow-hidden rounded-3xl border border-white/80 bg-white shadow-2xl shadow-violet-200/50 sm:rounded-[2rem] lg:min-h-[600px] lg:max-w-5xl lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="flex min-w-0 flex-col p-5 sm:p-9 lg:p-12">
          <Link to="/Home" className="mb-7 inline-flex w-fit items-center gap-2.5 text-slate-950 sm:mb-9">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-200">
              <Play size={18} fill="currentColor" />
            </span>
            <span className="text-xl font-extrabold tracking-tight">Eventify</span>
          </Link>

          <div className="mb-8">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700">
              <Sparkles size={14} /> Your next great experience starts here
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              {isSignup ? 'Create your account' : 'Welcome back'}
            </h1>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {isSignup
                ? 'Sign up to discover events and save your favorite experiences.'
                : 'Sign in to pick up where the fun begins.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">Full name</span>
                <span className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3.5 transition focus-within:border-violet-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100">
                  <UserRound size={18} className="shrink-0 text-slate-400" />
                  <input value={username} onChange={(e)=>{setusername(e.target.value)}} required type="text" autoComplete="name" placeholder="Your name" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-slate-400" />
                </span>
              </label>
            )}
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-slate-700">Email address</span>
              <span className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3.5 transition focus-within:border-violet-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100">
                <Mail size={18} className="shrink-0 text-slate-400" />
                <input value={email} onChange={(e)=>{setemail(e.target.value)}} required type="email" autoComplete="email" placeholder="you@example.com" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-slate-400" />
              </span>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-slate-700">Password</span>
              <span className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3.5 transition focus-within:border-violet-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100">
                <LockKeyhole size={18} className="shrink-0 text-slate-400" />
                <input value={password} onChange={(e)=>{setpassword(e.target.value)}} required type="password" autoComplete={isSignup ? 'new-password' : 'current-password'} minLength={6} placeholder="At least 6 characters" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-slate-400" />
              </span>
            </label>

            {!isSignup && (
              <div className="flex items-center justify-between gap-3 py-1 text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-violet-600 focus:ring-violet-500" />
                  Remember me
                </label>
                <button  type="button" className="font-semibold text-violet-700 transition hover:text-violet-900">
                  Forgot password?
                </button>
              </div>
            )}

            <button onClick={()=>{login()}}  type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200">
              {isSignup ? 'Create account' : 'Sign in'}
              <ArrowRight size={17} />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button type="button" onClick={() => setIsSignup(!isSignup)} className="font-bold text-violet-700 hover:text-violet-900">
              {isSignup ? 'Sign in' : 'Sign up'}
            </button>
          </p>
          <p className="mt-auto pt-8 text-center text-xs text-slate-400">
            By continuing, you agree to our <a href="#terms" className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-2">Terms</a> and <a href="#privacy" className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-2">Privacy Policy</a>.
          </p>
        </div>

        <aside className="relative hidden min-w-0 overflow-hidden bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-900 p-10 text-white lg:flex lg:flex-col lg:justify-between lg:p-12">
          <div aria-hidden="true" className="absolute -right-24 -top-16 h-80 w-80 rounded-full border border-white/15" />
          <div aria-hidden="true" className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full border border-white/15" />
          <div aria-hidden="true" className="absolute right-8 top-36 h-32 w-32 rotate-12 rounded-[2rem] bg-white/10" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur">
              <CalendarDays size={14} /> Make every moment count
            </span>
            <h2 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl">
              Find your
              <br />
              people. Feel
              <br />
              <span className="text-violet-200">the moment.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-violet-100">
              From live music to inspiring talks, your next unforgettable day is just a ticket away.
            </p>
          </div>

          <div className="relative">
            <div className="group relative h-48 overflow-hidden rounded-2xl border border-white/20 shadow-xl shadow-indigo-950/20">
              <img
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=85"
                alt="Audience at a live music event"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/10 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur">
                Featured event
              </span>
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                <div>
                  <p className="text-lg font-bold">Live Music Night</p>
                  <p className="mt-0.5 text-xs text-violet-100">Mumbai · This weekend</p>
                </div>
                <span className="mb-0.5 flex shrink-0 items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1.5 text-[11px] font-semibold backdrop-blur">
                  <Users size={13} /> 2.4k going
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-violet-100">
              <span>Join a community of event lovers</span>
              <span className="inline-flex items-center gap-1.5 font-bold text-white"><Check size={14} /> 10k+ members</span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default Login
