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
      <section className="bg-[#020818] min-h-[100vh] grid grid-cols-2">
        <div className=" items-center justify-center flex flex-col ml-[5vw] ">
          <p className="text-6xl font-extrabold mr-50 mt-30 font-bold text-white">A link in bio built <span className="text-[#60A5FA] font-extrabold">for you.</span></p>
          <p className="text-1xl text-white pt-10">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap=4">
            
            
            
            <input value={text}
            onChange={(e)=>setText(e.target.value)}
             
             type="text" className=" focus:outline-white bg-white text-black p-4 mr-10 mt-12 w-[20vw] rounded-lg" placeholder="Claim your Handle" />
           
           
           <button onClick={()=>{createTree()}}   className="btn text-white bg-[#2563EB] w-[20vw] mt-12 rounded-4xl">Get started for free</button>
          </div>
        </div>

        <div className="items-center justify-center flex flex-col mr-[5vw]">
             <Image
                              src="/homee.png"
                              alt="Website Logo"
                              width={600}
                              height={600}
                              className="object-contain p-2 mt-35"
                          />
        </div>
      </section>
      <section className="bg-[#111827] min-h-[100vh]" ></section>
    </main>
  );
}
