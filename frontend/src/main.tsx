// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import './styles.css'
// import Login from './pages/Login'
// import Dashboard from './pages/Dashboard'
// import Authors from './pages/Authors'
// import Books from './pages/Books'
// import Users from './pages/Users'

// function App(){
//   const token = localStorage.getItem('token')
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-slate-50">
//         <nav className="bg-white shadow p-4">
//           <div className="container mx-auto flex justify-between">
//             <div className="font-bold">Library</div>
//             <div className="space-x-4">
//               <Link to="/">Dashboard</Link>
//               <Link to="/authors">Authors</Link>
//               <Link to="/books">Books</Link>
//               <Link to="/users">Users</Link>
//             </div>
//           </div>
//         </nav>
//         <div className="container mx-auto p-4">
//           <Routes>
//             <Route path="/" element={<Dashboard/>}/>
//             <Route path="/login" element={<Login/>}/>
//             <Route path="/authors" element={<Authors/>}/>
//             <Route path="/books" element={<Books/>}/>
//             <Route path="/users" element={<Users/>}/>
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   )
// }

// createRoot(document.getElementById('root')!).render(<App/>)

import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import AppShell from './ui/AppShell'
import Login from './pages/Login'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/*" element={<AppShell/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
