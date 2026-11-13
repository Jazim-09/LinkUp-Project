
"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";



export default function Home() {


  const router = useRouter();
  const [text, setText] = useState("")
  
  const createTree = ()=>{
    router.push(`/generate?handle=${text}`)
  }


  return (
    <main>
      <section className="bg-[#020818] min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 px-5 sm:px-8 lg:px-0 py-16 lg:py-0">
        <div className="items-center justify-center flex flex-col ml-0 lg:ml-[5vw] text-center lg:text-left order-1">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-20 lg:mt-30 mr-0 lg:mr-50 font-bold text-white">A link in bio built <span className="text-[#60A5FA] font-extrabold">for you.</span></p>
          <p className="text-base sm:text-lg text-white pt-6 sm:pt-8 lg:pt-10">Everything you are, all in one link. Connect your social media, showcase your work, and share what matters with LinkUp. One link. Endless possibilities.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full mt-8 lg:mt-0">
            
            
            
            <input value={text}
            onChange={(e)=>setText(e.target.value)}
             onKeyDown={(e) => e.key === "Enter" && createTree()}
             
             type="text" className="focus:outline-white bg-white text-black p-3 sm:p-4 mt-0 sm:mt-12 w-full sm:w-1/2 rounded-lg" placeholder="Claim your Handle" />
           
           
           <button onClick={()=>{createTree()}}   className="btn text-white bg-[#2563EB] w-full sm:w-1/2 mt-0 sm:mt-12 py-3 sm:py-4 rounded-4xl">Get started for free</button>
          </div>
        </div>

        <div className="items-center justify-center flex flex-col mr-0 lg:mr-[5vw] order-2">
             <Image
                              src="/homee.png"
                              alt="Website Logo"
                              width={600}
                              height={600}
                              className="object-contain p-2 mt-0 lg:mt-35 w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[600px] h-auto"
                          />
        </div>
      </section>
      <section className="bg-[#111827] min-h-screen"></section>
    </main>
  );
}



