
"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();

  // =====================================
  // USER STATE
  // =====================================

  const [id, setid] = useState("nothing");
  const [email, setEmail] = useState("nothing");
  const [username, setUsername] = useState("nothing");
  const [isAdmin, setIsAdmin] = useState(false);

  // =====================================
  // LOGOUT
  // =====================================

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");

      toast.success("LOGOUT SUCCESSFULLY");

      router.push("/login");
    } catch (error) {
      console.log("LOGOUT client ERROR:", error);

      toast.error("LOGOUT FAILED");
    }
  };

  // =====================================
  // GET CURRENT USER DETAILS
  // =====================================

  const getUserdetails = async () => {
    try {
      const res = await axios.get("/api/users/me");

      console.log("USER DATA:", res.data);

      setid(res.data.data._id);
      setEmail(res.data.data.email);
      setUsername(res.data.data.username);
      setIsAdmin(res.data.data.isAdmin);

    } catch (error) {
      console.log("getUserDetails ERROR:", error);

      toast.error("GETTING USER DATA FAILED");
    }
  };

  // =====================================
  // RUN WHEN PAGE LOADS
  // =====================================

  useEffect(() => {
    getUserdetails();
  }, []);

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
          absolute inset-0 opacity-[0.08]
          bg-[linear-gradient(to_bottom,transparent_50%,#3b2a20_50%)]
          bg-size-[100%_4px]
        "
      />

      {/* =====================================
          MAIN TERMINAL / PROFILE CARD
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

          {/* TITLE */}

          <div className="mb-8">

            <p className="text-xs text-[#8b6f47] mb-2 font-mono">
              &gt; LOADING_USER_PROFILE...
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
              PRO
              <span className="text-[#a0522d]">
                FILE
              </span>
            </h1>

            <div className="h-1 w-24 bg-[#a0522d] mt-3" />

          </div>

          {/* =====================================
              USER INFORMATION
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

            <p className="text-xs text-[#a0522d] mb-4">
              &gt; USER_INFORMATION
            </p>

            <div className="space-y-3 text-sm">

              {/* USERNAME */}

              <div className="flex justify-between border-b border-[#c9b99a] pb-2">

                <span className="text-[#8b6f47]">
                  USER
                </span>

                <span className="font-bold">
                  {username}
                </span>

              </div>

              {/* EMAIL */}

              <div className="flex justify-between border-b border-[#c9b99a] pb-2">

                <span className="text-[#8b6f47]">
                  EMAIL
                </span>

                <span className="font-bold max-w-45 truncate">
                  {email}
                </span>

              </div>

              {/* USER ID */}

              <div className="flex justify-between border-b border-[#c9b99a] pb-2">

                <span className="text-[#8b6f47]">
                  ID
                </span>

                <span className="font-bold max-w-45 truncate">
                  {id}
                </span>

              </div>

              {/* STATUS */}

              <div className="flex justify-between border-b border-[#c9b99a] pb-2">

                <span className="text-[#8b6f47]">
                  STATUS
                </span>

                <span className="text-[#a0522d] font-bold">
                  ● ONLINE
                </span>

              </div>

              {/* ACCESS */}

              <div className="flex justify-between">

                <span className="text-[#8b6f47]">
                  ACCESS
                </span>

                <span className="font-bold">
                  {isAdmin ? "ADMIN" : "USER"}
                </span>

              </div>

            </div>

          </div>

          {/* =====================================
              SYSTEM MESSAGE
          ====================================== */}

          <p className="mt-6 text-xs text-[#8b6f47] font-mono leading-6">

            &gt; WELCOME_BACK_{username}
            <br />

            &gt; SESSION_AUTHENTICATED
            <br />

            &gt; ALL_SYSTEMS_OPERATIONAL

          </p>

          {/* =====================================
              BUTTONS
          ====================================== */}

          <div className="mt-8 grid grid-cols-2 gap-4">

            {/* HOME BUTTON */}

            <Link
              href="/"
              className="
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

            {/* LOGOUT BUTTON */}

            <button
              onClick={logout}
              className="
                border-2
                border-[#4a3426]
                bg-[#c9b99a]
                text-[#4a3426]
                py-3
                font-mono
                font-black
                tracking-widest
                uppercase
                hover:bg-[#4a3426]
                hover:text-[#f3ead8]
                hover:shadow-[5px_5px_0px_#8b6f47]
                transition-all
                active:translate-y-0.5
              "
            >
              [ LOGOUT ]
            </button>

          </div>

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

          <span>
            CLIENT: ONLINE\
          </span>

          <span>
            SERVER: CONNECTED\
          </span>

        </div>

      </div>

    </main>
  );
}
