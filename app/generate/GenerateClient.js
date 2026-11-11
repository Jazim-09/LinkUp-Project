
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

const GenerateClient = () => {
  const searchParams = useSearchParams();

  const [links, setlinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get("handle") || "");
  const [pic, setpic] = useState("");

  const handleChange = (index, link, linktext) => {
    setlinks((initiallink) =>
      initiallink.map((item, i) =>
        i === index ? { link, linktext } : item
      )
    );
  };

  const addlink = () => {
    setlinks((previous) => [...previous, { link: "", linktext: "" }]);
  };

  const submitLinks = async () => {
    try {
      const response = await fetch("/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          links,
          handle,
          pic,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        setlinks([{ link: "", linktext: "" }]);
        sethandle("");
        setpic("");
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-[#e4effe] min-h-screen grid grid-cols-2">
      <div className="col-1 min-h-screen bg-[#e4effe] flex items-center justify-center px-25 py-52">
        <div className="bg-white w-full border rounded-2xl border-black-100 p-5">

          {/* Header */}
          <div className="header mb-10 text-center">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Create your LinkUp
            </h1>
            <p className="text-slate-500 mt-2 text-sm">
              Bring all your important links together in one place
            </p>
          </div>

          {/* Step 1 */}
          <div className="step1">
            <div className="flex items-center gap-3">
              <span className="flex w-8 h-8 bg-blue-600 rounded-full items-center text-sm text-white justify-center font-bold">
                1
              </span>
              <p className="font-semibold text-slate-800">
                Claim your Handle
              </p>
            </div>

            <input
              value={handle}
              onChange={(e) => sethandle(e.target.value)}
              className="w-full border border-slate-200 bg-slate-50 rounded-lg p-3 mt-4 text-sm text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              type="text"
              placeholder="Choose a Handle"
            />
          </div>

          {/* Step 2 */}
          <div className="step2 mt-5">
            <div className="flex items-center gap-3">
              <span className="flex w-8 h-8 bg-blue-600 rounded-full items-center text-sm text-white justify-center font-bold">
                2
              </span>
              <p className="font-semibold text-slate-800">Add Links</p>
            </div>

            {links.map((item, index) => (
              <div key={index} className="flex gap-3">
                <input
                  value={item.linktext || ""}
                  onChange={(e) =>
                    handleChange(index, item.link, e.target.value)
                  }
                  className="w-full border border-slate-200 bg-slate-50 rounded-lg p-3 mt-4 text-sm text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  type="text"
                  placeholder="Enter Link Text (e.g. Instagram)"
                />

                <input
                  value={item.link || ""}
                  onChange={(e) =>
                    handleChange(index, e.target.value, item.linktext)
                  }
                  className="w-full border border-slate-200 bg-slate-50 rounded-lg p-3 mt-4 text-sm text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  type="text"
                  placeholder="Enter Link URL"
                />
              </div>
            ))}

            <button
              onClick={addlink}
              type="button"
              className="border border-blue-200 rounded-lg font-bold py-2.5 px-5 text-blue-800 my-5"
            >
              + Add Link
            </button>
          </div>

          {/* Step 3 */}
          <div className="3main">
            <div className="flex items-center gap-3">
              <span className="flex w-8 h-8 bg-blue-600 rounded-full items-center text-sm text-white justify-center font-bold">
                3
              </span>
              <p className="font-semibold text-slate-800">
                Add Picture and Finalize
              </p>
            </div>

            <input
              value={pic}
              onChange={(e) => setpic(e.target.value)}
              className="w-full border border-slate-200 bg-slate-50 rounded-lg p-3 mt-4 text-sm text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              type="text"
              placeholder="Enter Link to your picture"
            />

            <button
              disabled={!pic || !handle || !links[0]?.linktext}
              onClick={submitLinks}
              type="button"
              className="disabled:bg-slate-400 bg-blue-800 font-bold text-white rounded-lg w-full my-5 p-3"
            >
              Create your LinkUp
            </button>

            <ToastContainer />
          </div>
        </div>
      </div>

      <div className="col2 w-full">
        <Image
          src="/generatee.png"
          alt="Website Logo"
          width={500}
          height={100}
          className="object-contain p-2 mt-35"
        />
      </div>
    </div>
  );
};

export default GenerateClient;
