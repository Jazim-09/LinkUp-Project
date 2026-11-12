"use client"
// import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'





const navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)


    const pathname = usePathname()
    const ShowNavbar = ["/", "/generate"].includes(pathname)

    
    return (<>{ShowNavbar &&        <nav className="bg-white w-[96%] sm:w-[94%] lg:w-[90%] fixed z-50 top-3 sm:top-4 lg:top-13 left-1/2 -translate-x-1/2 rounded-full flex justify-between items-center px-1 sm:px-3 lg:px-4"  >
            <div className="flex items-center gap-1 sm:gap-2 lg:gap-15" >
               <Link href="/"> <Image
                    src="/Logo.png"
                    alt="Website Logo"
                    width={135}
                    height={40}
                   className="object-contain p-1 sm:p-2 m-1 sm:m-2 lg:m-3 w-[90px] sm:w-[110px] lg:w-[135px] h-auto"
                /></Link>

               

                <ul className="hidden lg:flex gap-3 xl:gap-6 text-black text-sm xl:text-base">
                    <Link href="/"><li>Solutions</li></Link>
                    <Link href="/"><li>Features</li></Link>
                    <Link href="/"><li>Integrations</li></Link>
                    <Link href="/"><li>Resources</li></Link>
                    <Link href="/"><li>Pricing</li></Link>
                </ul>
            </div>



          <div className="flex items-center shrink-0">
                <button className="login px-2 py-2 sm:px-3 lg:px-4 rounded-lg m-0.5 sm:m-1 lg:m-2 text-xs sm:text-sm lg:text-base bg-gray-50 text-black whitespace-nowrap">Log in</button>
                <button className="signup text-white font-bold px-2 py-2 sm:px-3 lg:px-4 m-0.5 sm:m-1 lg:m-2 text-[10px] sm:text-xs lg:text-base rounded-full bg-[#2563EB] whitespace-nowrap">Sign up free</button>
            </div>

             <button
    className="md:hidden text-xl sm:text-2xl p-1 sm:p-2"
    onClick={() => setMenuOpen(!menuOpen)}
>
    {menuOpen ? "✕" : "☰"}
</button>


            {menuOpen && (
    <div className="absolute top-full left-0 mt-3 w-full bg-white rounded-2xl p-4 sm:p-5 shadow-lg md:hidden">
        <ul className="flex flex-col gap-4 text-black">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Solutions</Link></li>
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Features</Link></li>
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Integrations</Link></li>
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Resources</Link></li>
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
        </ul>
    </div>
)}
        </nav>

    }</>
    

    )
}

export default navbar