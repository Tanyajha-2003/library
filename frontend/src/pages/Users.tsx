import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Users(){
  const [users,setUsers]=useState<any[]>([])
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  useEffect(()=>{ fetch() },[])

  async function fetch(){ const res = await axios.get(import.meta.env.VITE_API_URL + '/users'); setUsers(res.data || []) }

  async function add(){
    if(!name||!email||!password) return alert('All fields required')
    await axios.post(import.meta.env.VITE_API_URL + '/users', { name, email, password })
    setName(''); setEmail(''); setPassword(''); fetch()
  }

  return (
    <div>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-card p-6 md:col-span-1">
          <h3 className="text-xl font-bold">Create User</h3>
          <input value={name} onChange={e=>setName(e.target.value)} className="w-full p-3 mt-3 rounded bg-transparent border" placeholder="Name" />
          <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-3 mt-3 rounded bg-transparent border" placeholder="Email" />
          <input value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-3 mt-3 rounded bg-transparent border" placeholder="Password" />
          <button onClick={add} className="btn-accent">Create</button>
        </div>

        <div className="md:col-span-3 glass-card p-6">
          <h3 className="text-xl font-bold mb-3">Users</h3>
          <div className="grid gap-3">
            {users.map(u=>(
              <div key={u.id} className="p-3 rounded border flex justify-between items-center">
                <div>
                  <div className="font-bold">{u.name}</div>
                  <div className="text-sm text-slate-300">{u.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
