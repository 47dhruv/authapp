"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3ead8] text-[#3b2a20] relative overflow-hidden">

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
          MAIN TERMINAL
      ====================================== */}
      <div className="relative min-h-screen flex flex-col">

        {/* =====================================
            NAVBAR / TERMINAL HEADER
        ====================================== */}
        <header
          className="
            w-full
            border-b-2
            border-[#4a3426]
            bg-[#f8f0df]
          "
        >
          <div
            className="
              max-w-6xl
              mx-auto
              px-5
              py-4
              flex
              items-center
              justify-between
            "
          >

            {/* LOGO */}
            <Link
              href="/"
              className="
                font-mono
                font-black
                tracking-widest
                text-lg
                md:text-xl
              "
            >
              <span className="text-[#3b2a20]">
                CLIENT
              </span>
              <span className="text-[#a0522d]">
                _
              </span>
              <span className="text-[#3b2a20]">
                SERVER
              </span>
            </Link>

            {/* STATUS */}
            <div
              className="
                text-xs
                font-mono
                text-[#8b6f47]
              "
            >
              ● SYSTEM ONLINE
            </div>

          </div>
        </header>

        {/* =====================================
            HERO SECTION
        ====================================== */}
        <section
          className="
            flex-1
            flex
            items-center
            justify-center
            px-5
            py-16
          "
        >

          <div className="w-full max-w-4xl text-center">

            {/* TERMINAL MESSAGE */}
            <p
              className="
                text-xs
                md:text-sm
                font-mono
                text-[#8b6f47]
                mb-5
              "
            >
              &gt; INITIALIZING_CLIENT_SERVER...
            </p>

            {/* MAIN TITLE */}
            <h1
              className="
                text-5xl
                sm:text-6xl
                md:text-8xl
                font-black
                tracking-widest
                text-[#3b2a20]
                drop-shadow-[5px_5px_0px_#c9b99a]
              "
            >
              WELCOME
            </h1>

            <h2
              className="
                mt-2
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-black
                tracking-widest
                text-[#a0522d]
              "
            >
              USER_
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                max-w-xl
                mx-auto
                mt-6
                text-sm
                md:text-base
                leading-7
                font-mono
                text-[#6f5238]
              "
            >
              &gt; SECURE AUTHENTICATION SYSTEM
              <br />
              &gt; ACCESS YOUR ACCOUNT OR CREATE A NEW SESSION
            </p>

            {/* =====================================
                TERMINAL STATUS BOX
            ====================================== */}
            <div
              className="
                max-w-md
                mx-auto
                mt-8
                border-2
                border-[#9b8061]
                bg-[#eee2cc]
                p-5
                text-left
                font-mono
              "
            >

              <p className="text-xs text-[#a0522d] mb-4">
                &gt; SYSTEM_INFORMATION
              </p>

              <div className="space-y-2 text-xs md:text-sm text-[#6f5238]">

                <p>
                  SERVER_STATUS:
                  <span className="ml-2 font-bold text-[#3b2a20]">
                    ONLINE
                  </span>
                </p>

                <p>
                  DATABASE:
                  <span className="ml-2 font-bold text-[#3b2a20]">
                    CONNECTED
                  </span>
                </p>

                <p>
                  SECURITY:
                  <span className="ml-2 font-bold text-[#a0522d]">
                    ENABLED
                  </span>
                </p>

              </div>

            </div>

            {/* =====================================
                ACTION BUTTONS
            ====================================== */}
            <div
              className="
                mt-10
                flex
                flex-col
                sm:flex-row
                gap-4
                justify-center
              "
            >

              {/* =====================================
                        PROFILE BUTTON
                  ====================================== */}
              <div className="mt-10 flex justify-center">

                <Link
                  href="/profile"
                  className="
                  min-w-55
                  border-2
                  border-[#4a3426]
                  bg-[#a0522d]
                  text-[#f8f0df]
                  px-8
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
                  [ PROFILE ]
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================
            FOOTER
        ====================================== */}
        <footer
          className="
            border-t-2
            border-[#c9b99a]
            bg-[#f8f0df]
            px-5
            py-4
          "
        >
          <div
            className="
              max-w-6xl
              mx-auto
              flex
              flex-col
              sm:flex-row
              justify-between
              gap-2
              text-[10px]
              font-mono
              text-[#8b6f47]
            "
          >
            <span>
              CLIENT: ONLINE\
            </span>

            <span>
              SERVER: CONNECTED\
            </span>

            <span>
              © 2026 // CLIENT_SERVER
            </span>
          </div>
        </footer>

      </div>

    </main>
  );
}