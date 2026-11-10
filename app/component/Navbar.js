"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'



const navbar = () => {


    const pathname = usePathname()
    const ShowNavbar = ["/", "/generate"].includes(pathname)

    
    return (<>{ShowNavbar &&        <nav className='bg-white  w-[90vw] fixed z-50 top-13 right-[5vw] rounded-full justify-between flex'  >
            <div className='logo flex gap-15 items-center' >
               <Link href="/"> <Image
                    src="/logo.png"
                    alt="Website Logo"
                    width={135}
                    height={40}
                    className="object-contain p-2 m-3"
                /></Link>
                <ul className='flex gap-6  text-black'>
                    <Link href="/"><li>Solutions</li></Link>
                    <Link href="/"><li>Features</li></Link>
                    <Link href="/"><li>Integrations</li></Link>
                    <Link href="/"><li>Resources</li></Link>
                    <Link href="/"><li>Pricing</li></Link>
                </ul>
            </div>
            <div>
                <button className="login p-4 rounded-lg m-4 bg-gray-50 text-black">Log in</button>
                <button className="signup text-white font-bold p-5 m-4 rounded-full bg-[#2563EB]">Sign up free</button>
            </div>
        </nav>

    }</>

    )
}

export default navbar