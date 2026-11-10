"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';



const Generate = () => {
  
  const searchParams = useSearchParams()


  // const [link, setlink] = useState("")
  // const [linktext, setlinktext] = useState("")
  const [links, setlinks] = useState([{ link: "", linktext: "" }])
  const [handle, sethandle] = useState(searchParams.get(`handle`))
  const [pic, setpic] = useState("")

  const handleChange = (index, link, linktext) => {

    setlinks((initiallink) => {

      return initiallink.map((item, i) => {
        if (i === index) {
          return { link, linktext }
        }
        else {
          return item
        }
      })
    })


  }

  const addlink = () => {
    setlinks(links.concat([{ link: "", linktext: "" }]))
  }

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

   

    const raw = JSON.stringify({
  links: links,
  handle: handle,
  pic: pic
});

    console.log(raw)

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions)
    const result = await r.json()

    if(result.success){
    toast.success(result.message)
    setlinks([])
    sethandle('')
    setpic('')
  }
    else{
      toast.error(result.message)
    }

  }
  return (
    <div className='bg-[#e4effe] min-h-screen grid grid-cols-2'>


      <div className=" col-1 min-h-screen bg-[#e4effe] flex items-center justify-center px-25 py-52">
        <div className='bg-white w-full border rounded-2xl border-black-100 p-5 '>
          {/* header */}

          <div className="header mb-10 text-center">
            <h1 className='text-3xl font-bold text-slate-900   tracking-tight' >Create your LinkUp</h1>
            <p className='text-slate-500 mt-2 text-sm'>Bring all your important links together in one place</p>
          </div>

          {/* step1 */}
          <div className="step1 ">
            <div className='flex items-center gap-3'>
              <span className=' flex w-8 h-8 bg-blue-600 rounded-full items-center text-sm text-white  justify-center font-bold'>1</span>
              <p2 className='font-semibold text-slate-800 '>Claim your Handle</p2>
            </div>

            <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className='w-full border border-slate-200 bg-slate-50 rounded-lg p-3 mt-4 text-sm text-slate-800 outline-none   placeholder: focus:border-blue-500 focus:ring-2  focus:ring-blue-100 text-slate-400 bg-white' type="text" placeholder='Choose a Handle' />



          </div>
          {/* step 2 */}
          <div className="step2 mt-5">
            <div className=' flex items-center gap-3'>
              <span className=' flex w-8 h-8 bg-blue-600 rounded-full items-center text-sm text-white  justify-center font-bold'>2</span>
              <p className='font-semibold text-slate-800 '>Add Links</p>

            </div>

            {links && links.map((item, index) => {
              return <div key={index}>
                <div className='flex gap-3'><input value={item.linktext|| ""} 
                onChange={e => { handleChange(index,  item.link, e.target.value) }}
                className='w-full border border-slate-200 bg-slate-50 rounded-lg p-3 mt-4 text-sm text-slate-800 outline-none   placeholder: focus:border-blue-500 focus:ring-2  focus:ring-blue-100 text-slate-400 bg-white' type="text" placeholder='Enter Link Text (e.g. Instagram)' />
                
                
                <input value={item.link|| ""} 
                onChange={e => { handleChange(index, e.target.value, item.linktext) }} 
                className='w-full border border-slate-200 bg-slate-50 rounded-lg p-3 mt-4 text-sm text-slate-800 outline-none   placeholder:text-slate-400 focus:border-blue-500 focus:ring-2  focus:ring-blue-100  bg-white' type="text" placeholder='Enter Link URL' />
              </div>
              </div>
            })

            }

            <button  onClick={addlink} className='border border-blue-200 rounded-lg font-bold  py-2.5 px-5 text-blue-800 my-5'>+ Add Link</button>

          </div>
          {/* step 3 */}
          <div className="3main ">
            <div className=' flex items-center gap-3'>
              <span className=' flex w-8 h-8 bg-blue-600 rounded-full items-center text-sm text-white  justify-center font-bold'>3</span>
              <p className='font-semibold text-slate-800 '>Add Picture and Finalize</p>

            </div>

            <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className='w-full border border-slate-200 bg-slate-50 rounded-lg p-3 mt-4 text-sm text-slate-800 outline-none   placeholder:text-slate-400 focus:border-blue-500 focus:ring-2  focus:ring-blue-100  bg-white' type="text" placeholder='Enter Link to your picture' />

            <button disabled={pic=="" ||handle=="" || links[0].linktext=="" } onClick={submitLinks} type='button'
             className=' disabled:bg-slate-400 bg-blue-800  border-blue font-bold text-white rounded-lg w-full my-5 p-3'>Create your LinkUp</button>

            <ToastContainer />
          </div>

        </div>



      </div>

      <div className="col2  w-full  ]">
        <Image
          src="/generatee.png"
          alt="Website Logo"
          width={500}
          height={100}
          className="object-contain p-2 mt-35"
        />
      </div>
    </div>
  )
}

export default Generate

// <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">

//   {/* Header */}
//   <div className="mb-8 text-center">
//     <h1 className="text-3xl font-bold tracking-tight text-slate-900">
//       Create your LinkUp
//     </h1>
//     <p className="mt-2 text-sm text-slate-500">
//       Bring all your important links together in one place.
//     </p>
//   </div>

//   {/* Step 1 */}
//   <div className="mb-7">
//     <div className="mb-3 flex items-center gap-3">
//       <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
//         1
//       </span>
//       <h2 className="font-semibold text-slate-800">
//         Claim your Handle
//       </h2>
//     </div>

//     <input
//       type="text"
//       placeholder="Choose a Handle"
//       className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
//     />
//   </div>

//   {/* Step 2 */}
//   <div className="mb-7">
//     <div className="mb-3 flex items-center gap-3">
//       <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
//         2
//       </span>
//       <h2 className="font-semibold text-slate-800">
//         Add your Links
//       </h2>
//     </div>

//     <div className="space-y-3">
//       <input
//         type="text"
//         placeholder="Enter Link Text (e.g. Instagram)"
//         className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
//       />

//       <input
//         type="url"
//         placeholder="Enter Link URL"
//         className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
//       />

//       <button
//         type="button"
//         className="rounded-xl border border-blue-200 px-5 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
//       >
//         + Add Link
//       </button>
//     </div>
//   </div>

//   {/* Step 3 */}
//   <div className="mb-8">
//     <div className="mb-3 flex items-center gap-3">
//       <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
//         3
//       </span>
//       <h2 className="font-semibold text-slate-800">
//         Add Picture & Finalize
//       </h2>
//     </div>

//     <input
//       type="url"
//       placeholder="Enter link to your picture"
//       className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
//     />
//   </div>

//   {/* Submit */}
//   <button
//     type="button"
//     className="w-full rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-700 hover:shadow-md active:scale-[0.98]"
//   >
//     Create your LinkUp →
//   </button>

//   <p className="mt-5 text-center text-xs text-slate-400">
//     Make your digital identity stand out.
//   </p>

// </div>