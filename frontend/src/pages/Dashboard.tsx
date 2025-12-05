import React from 'react'
import { motion } from 'framer-motion'

export default function Dashboard(){
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <motion.div className="p-6 glass-card" whileHover={{ y: -6 }} transition={{ type:'spring', stiffness: 120 }}>
          <h3 className="text-xl font-bold">Library Aura</h3>
          <p className="text-sm text-slate-300">Magic index, book suggestions, and activity.</p>
        </motion.div>
        <motion.div className="p-6 glass-card animate-floaty" whileHover={{ scale:1.02 }}>
          <h3 className="text-xl font-bold">Celestial Archive</h3>
          <p className="text-sm text-slate-300">Explore authors and rare tomes.</p>
        </motion.div>
        <motion.div className="p-6 glass-card">
          <h3 className="text-xl font-bold">Borrowed Grimoire</h3>
          <p className="text-sm text-slate-300">Keep track of borrowed books.</p>
        </motion.div>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-2xl font-bold mb-2">Tonight's Highlights</h2>
        <p className="text-slate-300">A selection of featured books with animated covers.</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {['PH','AG','LW'].map((c,i)=>(
            <div key={i} className="p-4 bg-gradient-to-br from-white/3 to-transparent rounded">
              <div className="book-cover mb-3">{c}</div>
              <div className="font-bold">Mystic Tome {i+1}</div>
              <div className="text-sm text-slate-300">Arcane knowledge</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
