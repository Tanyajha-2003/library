import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState('admin@example.com')
  const [password,setPassword]=useState('password')
  const nav = useNavigate()

  async function submit(e:any){
    e.preventDefault()
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + '/auth/login', { email, password })
      if(res.data?.access_token){
        localStorage.setItem('token', res.data.access_token)
        nav('/')
      } else {
        alert('Login failed')
      }
    } catch(e:any){
      alert('Error: '+ (e?.response?.data?.message || e.message))
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 glass-card">
        <h1 className="text-3xl h-head mb-2">Arcane Library</h1>
        <p className="text-sm text-slate-300 mb-6">Enter the library</p>
        <form onSubmit={submit} className="space-y-4">
  <input
    value={email}
    onChange={e => setEmail(e.target.value)}
    className="w-full p-3 rounded border border-white bg-transparent text-white placeholder-white focus:border-purple-400 focus:ring-0"
    placeholder="Email"
  />

  <input
    value={password}
    type="password"
    onChange={e => setPassword(e.target.value)}
    className="w-full p-3 rounded border border-white bg-transparent text-white placeholder-white focus:border-purple-400 focus:ring-0"
    placeholder="Password"
  />

  <button className="btn-accent">Login</button>
</form>

      </div>
    </div>
  )
}
