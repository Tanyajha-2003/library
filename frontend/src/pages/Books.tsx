import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function Books(){
  const [books,setBooks]=useState<any[]>([])
  const [title,setTitle]=useState('')
  const [authorId,setAuthorId]=useState<number|null>(null)
  const [authors,setAuthors]=useState<any[]>([])

  useEffect(()=>{ fetch(); fetchAuthors() },[])

  async function fetch(){ const res = await axios.get(import.meta.env.VITE_API_URL + '/books'); setBooks(res.data || []) }
  async function fetchAuthors(){ const res = await axios.get(import.meta.env.VITE_API_URL + '/authors'); setAuthors(res.data || []) }

  async function add(){
    if(!title || !authorId) return alert('Title and author required')
    await axios.post(import.meta.env.VITE_API_URL + '/books', { title, authorId })
    setTitle(''); setAuthorId(null); fetch()
  }

  async function borrow(bookId:number){
    const userId = prompt('Enter your user id to borrow:')
    if(!userId) return
    await axios.post(import.meta.env.VITE_API_URL + '/borrows/borrow', { bookId, userId: Number(userId) })
    fetch()
  }

  async function ret(bookId:number){
    const userId = prompt('Enter your user id to return:')
    if(!userId) return
    await axios.post(import.meta.env.VITE_API_URL + '/borrows/return', { bookId, userId: Number(userId) })
    fetch()
  }

  return (
    <div>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card shadow-xl">
          <h3 className="text-xl font-bold">Add Book</h3>
          <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full p-3 mt-3 rounded bg-transparent border" placeholder="Title" />
          <select className="w-full p-3 mt-3 rounded bg-transparent border" onChange={e=>setAuthorId(Number(e.target.value))} value={authorId ?? ''}>
            <option value="">Select author</option>
            {authors.map(a=> <option key={a.id} value={a.id}>{a.name}</option>)}
          </select>
          <button onClick={add} className=" btn-accent">Bind</button>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-3">Books</h3>
          <div className="grid gap-3">
            {books.map(b=>(
              <motion.div key={b.id} className="p-4 glass-card flex items-center justify-between" whileHover={{ y:-6 }}>
                <div className="flex items-center gap-4">
                  <div className="book-cover">{b.title?.slice(0,2).toUpperCase()}</div>
                  <div>
                    <div className="font-bold">{b.title}</div>
                    <div className="text-sm text-slate-300">{b.author?.name}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm">{b.isBorrowed ? 'Borrowed' : 'Available'}</div>
                  {!b.isBorrowed ? <button onClick={()=>borrow(b.id)} className=" btn-accent">Borrow</button> : <button onClick={()=>ret(b.id)} className="btn-accent">Return</button>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
