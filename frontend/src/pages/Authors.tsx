import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function Authors(){
  const [authors,setAuthors]=useState<any[]>([])
  const [name,setName]=useState('')
  const [bio,setBio]=useState('')

  useEffect(()=>{ fetch() },[])

  async function fetch(){
    const res = await axios.get(import.meta.env.VITE_API_URL + '/authors')
    setAuthors(res.data || [])
  }

  async function add(){
    if(!name) return alert('Name required')
    await axios.post(import.meta.env.VITE_API_URL + '/authors', { name, bio })
    setName(''); setBio(''); fetch()
  }

  return (
    <div>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card p-6">
          <h3 className="text-xl font-bold">Add Author</h3>
          <input value={name} onChange={e=>setName(e.target.value)} className="w-full p-3 mt-3 rounded bg-transparent border" placeholder="Name" />
          <input value={bio} onChange={e=>setBio(e.target.value)} className="w-full p-3 mt-3 rounded bg-transparent border" placeholder="Bio"/>
          <button onClick={add} className="btn-accent">Add</button>
        </div>
      
        <div className="glass-card p-6 md:col-span-2">
          <h3 className="text-xl font-bold mb-3">Authors</h3>
          <div className="grid gap-3">
            {authors.map(a=>(
              <motion.div key={a.id} className="p-3 rounded border bg-transparent flex items-center justify-between" whileHover={{ scale:1.01 }}>
                <div>
                  <div className="font-bold">{a.name}</div>
                  <div className="text-sm text-slate-300">{a.bio}</div>
                </div>
                <div className="text-sm text-slate-400">Books: {a.books?.length || 0}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
