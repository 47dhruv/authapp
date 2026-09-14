"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    // signup logic
  };

  return (
    <main className="min-h-screen bg-[#f3ead8] text-[#3b2a20] flex items-center justify-center px-4 relative overflow-hidden">

      {/* Retro Grid */}
      <div
        className="
          absolute inset-0 opacity-20
          bg-[linear-gradient(#8b6f47_1px,transparent_1px),
              linear-gradient(90deg,#8b6f47_1px,transparent_1px)]
          bg-size-[40px_40px]
        "
      />

      {/* CRT Scanlines */}
      <div
        className="
          pointer-events-none
          absolute inset-0 opacity-[0.08]
          bg-[linear-gradient(to_bottom,transparent_50%,#3b2a20_50%)]
          bg-length-[100%_4px]
        "
      />

      {/* Main Terminal */}
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

        {/* Header */}
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
          <span>CLIENT_SERVER</span>

          <span className="text-xs">
            ● ONLINE
          </span>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">

          {/* Title */}
          <div className="mb-8">

            <p className="text-xs text-[#8b6f47] mb-2 font-mono">
              &gt; INITIALIZING_NEW_USER...
            </p>

            <h1
              className="
                text-4xl
                md:text-5xl
                font-black
                tracking-widest
                text-[#3b2a20]
                drop-shadow-[3px_3px_0px_#c9b99a]
              "
            >
              SIGN<span className="text-[#a0522d]">UP</span>
            </h1>

            <div className="h-0.75 w-24 bg-[#a0522d] mt-3" />

          </div>

          {/* Username */}
          <div className="mb-5">

            <label className="block text-xs font-mono mb-2 text-[#6f5238]">
              USERNAME
            </label>

            <input
              type="text"
              value={user.username}
              onChange={(e) =>
                setUser({
                  ...user,
                  username: e.target.value,
                })
              }
              placeholder="enter_username..."
              className="
                w-full
                bg-[#eee2cc]
                border-2
                border-[#9b8061]
                px-4
                py-3
                text-[#3b2a20]
                font-mono
                outline-none
                placeholder:text-[#a99578]
                focus:border-[#a0522d]
                focus:shadow-[4px_4px_0px_#c9b99a]
                transition
              "
            />

          </div>

          {/* Email */}
          <div className="mb-5">

            <label className="block text-xs font-mono mb-2 text-[#6f5238]">
              EMAIL_ADDRESS
            </label>

            <input
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
              placeholder="user@email.com"
              className="
                w-full
                bg-[#eee2cc]
                border-2
                border-[#9b8061]
                px-4
                py-3
                text-[#3b2a20]
                font-mono
                outline-none
                placeholder:text-[#a99578]
                focus:border-[#a0522d]
                focus:shadow-[4px_4px_0px_#c9b99a]
                transition
              "
            />

          </div>

          {/* Password */}
          <div className="mb-6">

            <label className="block text-xs font-mono mb-2 text-[#6f5238]">
              PASSWORD
            </label>

            <input
              type="password"
              value={user.password}
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
              placeholder="••••••••"
              className="
                w-full
                bg-[#eee2cc]
                border-2
                border-[#9b8061]
                px-4
                py-3
                text-[#3b2a20]
                font-mono
                outline-none
                placeholder:text-[#a99578]
                focus:border-[#a0522d]
                focus:shadow-[4px_4px_0px_#c9b99a]
                transition
              "
            />

          </div>

          {/* Button */}
          <button
            onClick={onSignup}
            className="
              w-full
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
              active:translate-y-0.5
              transition-all
            "
          >
            [ CREATE ACCOUNT ]
          </button>

          {/* Login */}
          <p className="text-center text-xs font-mono text-[#8b6f47] mt-6">

            EXISTING_USER?

            <Link
              href="/login"
              className="
                ml-2
                text-[#a0522d]
                font-bold
                hover:text-[#3b2a20]
                hover:underline
              "
            >
              LOGIN_
            </Link>

          </p>

        </div>

        {/* Footer */}
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
          <span>CLIENT: ONLINE</span>
          <span>SERVER: CONNECTED</span>
        </div>

      </div>

    </main>
  );
}