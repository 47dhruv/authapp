"use client";

import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f3ead8] text-[#3b2a20] flex items-center justify-center px-4 relative overflow-hidden">

      {/* =====================================
          RETRO BACKGROUND GRID
      ====================================== */}
      <div
        className="
          absolute inset-0 opacity-20
          bg-[linear-gradient(#8b6f47_1px,transparent_1px),
              linear-gradient(90deg,#8b6f47_1px,transparent_1px)]
          bg-size-[40px_40px]
        "
      />

      {/* =====================================
          CRT SCANLINES
      ====================================== */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.08]
          bg-[linear-gradient(to_bottom,transparent_50%,#3b2a20_50%)]
          bg-size-[100%_4px]
        "
      />

      {/* =====================================
          MAIN TERMINAL CARD
      ====================================== */}
      <div
        className="
          relative
          w-full
          max-w-md
          bg-[#f8f0df]
          border-2
          border-[#4a3426]
          shadow-[8px_8px_0px_#8b6f47]
        "
      >

        {/* =====================================
            TERMINAL HEADER
        ====================================== */}
        <div
          className="
            flex
            justify-between
            items-center
            px-5
            py-3
            bg-[#4a3426]
            text-[#f3ead8]
            border-b-2
            border-[#4a3426]
            font-mono
            font-bold
          "
        >
          <span>CLIENT_SERVER\</span>

          <span className="text-xs">
            ● ONLINE
          </span>
        </div>

        {/* =====================================
            MAIN CONTENT
        ====================================== */}
        <div className="p-6 md:p-8">

          {/* =====================================
              ERROR TITLE
          ====================================== */}
          <div className="mb-8">

            <p className="text-xs text-[#8b6f47] mb-2 font-mono">
              &gt; SEARCHING_FOR_PAGE...
            </p>

            <h1
              className="
                text-6xl
                md:text-7xl
                font-black
                tracking-widest
                text-[#a0522d]
                drop-shadow-[4px_4px_0px_#c9b99a]
              "
            >
              404
            </h1>

            <div className="h-1 w-24 bg-[#a0522d] mt-3" />
          </div>

          {/* =====================================
              ERROR STATUS
          ====================================== */}
          <div
            className="
              border-2
              border-[#9b8061]
              bg-[#eee2cc]
              p-5
              font-mono
            "
          >

            <p className="text-[#a0522d] text-sm mb-4">
              &gt; ERROR_PAGE_NOT_FOUND
            </p>

            <p className="text-[#3b2a20] text-sm leading-7">
              THE REQUESTED PAGE DOES NOT EXIST.
              <br />
              THE RESOURCE MAY HAVE BEEN MOVED
              <br />
              OR DELETED.
            </p>

            {/* STATUS */}
            <div className="mt-5 border-t-2 border-[#c9b99a] pt-4">

              <p className="text-[#8b6f47] text-xs">
                STATUS:
                <span className="ml-2 text-[#a0522d] font-bold">
                  ● 404 NOT FOUND
                </span>
              </p>

              <p className="text-[#8b6f47] text-xs mt-2">
                SERVER:
                <span className="ml-2 text-[#3b2a20]">
                  ONLINE
                </span>
              </p>

            </div>
          </div>

          {/* =====================================
              HOME BUTTON
          ====================================== */}
          <Link
            href="/"
            className="
              block
              w-full
              mt-8
              text-center
              border-2
              border-[#4a3426]
              bg-[#a0522d]
              text-[#f8f0df]
              py-3
              font-mono
              font-black
              tracking-widest
              uppercase
              hover:bg-[#4a3426]
              hover:text-[#f3ead8]
              hover:shadow-[5px_5px_0px_#c9b99a]
              transition-all
              active:translate-y-0.5
            "
          >
            [ HOME ]
          </Link>

        </div>

        {/* =====================================
            TERMINAL FOOTER
        ====================================== */}
        <div
          className="
            border-t-2
            border-[#c9b99a]
            px-5
            py-3
            text-[10px]
            font-mono
            text-[#8b6f47]
            flex
            justify-between
          "
        >
          <span>CLIENT: ONLINE\</span>
          <span>SERVER: CONNECTED\</span>
        </div>

      </div>
    </main>
  );
}