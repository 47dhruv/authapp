
"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/user/logout");

      toast.success("LOGOUT SUCCESSFULLY");
      router.push("/login");
    } catch (error) {
      console.log("LOGOUT API ERROR:", error);
      toast.error("LOGOUT FAILED");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-6">

      {/* CRT Scanlines */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-10
          bg-[linear-gradient(to_bottom,transparent_50%,#fff_50%)]
          bg-size-[100%_4px]
        "
      />

      <div className="relative w-full max-w-lg text-center font-mono">

        {/* System Header */}
        <p className="mb-4 text-sm text-green-400">
          &gt; USER PROFILE
        </p>

        {/* Profile Title */}
        <h1
          className="
            text-5xl
            md:text-7xl
            font-black
            uppercase
            tracking-[0.2em]
            text-transparent
            bg-clip-text
            bg-linear-to-b
            from-[#ff3c00]
            to-[#ff8c00]
            drop-shadow-[4px_4px_0px_#7a1800]
          "
        >
          PROFILE
        </h1>

        {/* User Information */}
        <div
          className="
            mt-8
            border-2
            border-green-400
            p-6
            text-left
            text-gray-400
          "
        >
          <p className="text-green-400 mb-4">
            &gt; USER_INFORMATION
          </p>

          <p className="leading-7">
            USER: ACTIVE
            <br />
            STATUS: ONLINE
            <br />
            ACCESS: AUTHORIZED
          </p>
        </div>

        {/* System Message */}
        <p className="mt-6 text-gray-500 leading-7">
          &gt; WELCOME BACK, USER
          <br />
          &gt; YOUR SESSION IS ACTIVE
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          {/* Home */}
          <Link
            href="/"
            className="
              inline-block
              border-2
              border-green-400
              px-8
              py-3
              text-green-400
              uppercase
              hover:bg-green-400
              hover:text-black
              transition-colors
            "
          >
            [ Home ]
          </Link>

          {/* Logout */}
          <button
            onClick={logout}
            className="
              border-2
              border-[#ff3c00]
              px-8
              py-3
              text-[#ff3c00]
              uppercase
              hover:bg-[#ff3c00]
              hover:text-black
              transition-colors
            "
          >
            [ Logout ]
          </button>

        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-gray-700">
          © 2026 // USER_SESSION_ACTIVE
        </p>

      </div>
    </main>
  );
}

