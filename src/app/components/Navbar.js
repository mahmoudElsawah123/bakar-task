import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="container flex items-center gap-10">
        {/* Card Section */}
        <div className="text-white font-semibold text-lg">
          <Link href="/" className="hover:text-gray-400">Card</Link>
        </div>

        {/* Transactions Section */}
        <div className="text-white font-semibold text-lg">
          <Link href="/transactions" className="hover:text-gray-400">Transactions</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
