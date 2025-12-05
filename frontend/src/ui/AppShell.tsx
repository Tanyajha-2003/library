// import React, { useState, useEffect } from 'react'
// import { Routes, Route, Link, useNavigate } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'
// import Dashboard from '../pages/Dashboard'
// import Authors from '../pages/Authors'
// import Books from '../pages/Books'
// import Users from '../pages/Users'
// import { FiMenu, FiX } from 'react-icons/fi'

// function NavItem({ to, children }: { to: string; children: any }) {
//   return (
//     <Link
//       to={to}
//       className="block py-2 px-4 rounded text-slate-300 hover:text-white hover:bg-purple-700/30 transition font-medium tracking-wide"
//     >
//       {children}
//     </Link>
//   )
// }

// export default function AppShell() {
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)
//   const nav = useNavigate()

//   useEffect(() => {
//     const handleResize = () => setIsDesktop(window.innerWidth >= 768)
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   function logout() {
//     localStorage.removeItem('token')
//     nav('/login')
//   }

//   return (
//     <div className="min-h-screen flex bg-stars text-slate-200">

//       {/* Sidebar */}
//       <AnimatePresence>
//         {(sidebarOpen || isDesktop) && (
//           <motion.aside
//             initial={{ x: -300, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -300, opacity: 0 }}
//             transition={{ type: 'spring', stiffness: 120 }}
//             className={`fixed md:relative z-20 h-screen w-72 nav flex flex-col border-r border-purple-900/30`}
//           >
//             <div className="p-6 flex flex-col h-full">
//               <div className="mb-10">
//                 <div className="text-2xl font-extrabold tracking-wide text-white drop-shadow-[0_0_6px_rgba(150,70,255,0.7)]">
//                   Arcane Library
//                 </div>
//                 <div className="text-sm text-purple-300 opacity-80">
//                   Where books whisper spells
//                 </div>
//               </div>

//               <nav className="space-y-2 flex-1">
//                 <NavItem to="/">Dashboard</NavItem>
//                 <NavItem to="/books">Tomes</NavItem>
//                 <NavItem to="/authors">Scribes</NavItem>
//                 <NavItem to="/users">Acolytes</NavItem>
//               </nav>

//               <div className="mt-auto pt-6">
//                 <button
//                   onClick={logout}
//                   className="w-full py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold shadow-[0_0_15px_rgba(150,50,255,0.6)] hover:opacity-90 transition"
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             </div>
//           </motion.aside>
//         )}
//       </AnimatePresence>

//       {/* Main content */}
//       <div className="flex-1 flex flex-col md:ml-72">
//         {/* Top bar for mobile */}
//         {!isDesktop && (
//           <div className="flex justify-between items-center p-4 bg-purple-900/40 backdrop-blur-md">
//             <div className="text-xl font-extrabold text-white">Arcane Library</div>
//             <button onClick={() => setSidebarOpen(!sidebarOpen)}>
//               {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>
//           </div>
//         )}

//         <main className="p-8">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/books" element={<Books />} />
//             <Route path="/authors" element={<Authors />} />
//             <Route path="/users" element={<Users />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   )
// }

import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Dashboard from '../pages/Dashboard'
import Authors from '../pages/Authors'
import Books from '../pages/Books'
import Users from '../pages/Users'
import { FiMenu, FiX } from 'react-icons/fi'

function NavItem({ to, children }: { to: string; children: any }) {
  return (
    <Link
      to={to}
      className="block py-2 px-4 rounded text-slate-300 hover:text-white hover:bg-purple-700/30 transition font-medium tracking-wide"
    >
      {children}
    </Link>
  )
}

export default function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)
  const nav = useNavigate()

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function logout() {
    localStorage.removeItem('token')
    nav('/login')
  }

  return (
    <div className="min-h-screen flex bg-stars text-slate-200">

      {/* SIDEBAR */}
      <AnimatePresence>
        {(sidebarOpen || isDesktop) && (
          <motion.aside
            initial={{ x: -260, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -260, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            className="fixed md:relative z-20 h-screen w-72 nav flex flex-col border-r border-purple-900/30 bg-black/30 backdrop-blur-lg"
          >
            <div className="flex flex-col h-full p-6">

              {/* Logo */}
              <div className="mb-10">
                {/* <div className="text-2xl font-extrabold tracking-wide text-white drop-shadow-[0_0_6px_rgba(150,70,255,0.7)]">
                  Arcane Library
                </div> */}
                <h1 className="text-3xl h-head mb-2">Arcane Library</h1>
                <div className="text-sm text-purple-300 opacity-80">Where books whisper spells</div>
              </div>

              {/* Nav */}
              <nav className="space-y-2 flex-1">
                <NavItem to="/">Dashboard</NavItem>
                <NavItem to="/books">Tomes</NavItem>
                <NavItem to="/authors">Scribes</NavItem>
                <NavItem to="/users">Acolytes</NavItem>
              </nav>

              {/* Logout */}
              <div className="pt-4">
                <button
                  onClick={logout}
                  className="btn-accent"
                >
                  Sign Out
                </button>
              </div>

            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <div className={`flex-1 flex flex-col ${isDesktop ? 'md:ml-72' : ''}`}>

        {/* Mobile Top Bar */}
        {!isDesktop && (
          <div className="flex justify-between items-center p-4 bg-purple-900/40 backdrop-blur-md border-b border-purple-800/30">
            {/* <div className="text-xl font-extrabold text-white">Arcane Library</div> */}
            <h1 className="text-3xl h-head mb-2">Arcane Library</h1>
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        )}

        {/* Page Content */}
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/books" element={<Books />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
