
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [disabledButton, setDisabledButton] = useState(true);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // Disable button when email or password is empty
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [user]);

  const onLogin = async () => {
    try {
      setLoading(true);

      const response = await axios.post("/api/users/login", user);

      console.log("Login success:", response.data);

      toast.success("LOGIN SUCCESSFULLY");

      router.push("/profile");

    } catch (error) {
      console.log("Login error:", error);

      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message ||
            "LOGIN FAILED. PLEASE TRY AGAIN!"
        );
      } else {
        toast.error("SOMETHING WENT WRONG!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f3ead8] text-[#3b2a20] flex items-center justify-center px-4 relative overflow-hidden">

      {/* Retro Grid Background */}
      <div
        className="
          absolute inset-0 opacity-20
          bg-[linear-gradient(#8b6f47_1px,transparent_1px),
          linear-gradient(90deg,#8b6f47_1px,transparent_1px)]
          bg-size-[40px_40px]
        "
      />

      {/* Retro Scanlines */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.08]
          bg-[linear-gradient(to_bottom,transparent_50%,#3b2a20_50%)]
          bg-length-[100%_4px]
        "
      />

      {/* Login Terminal */}
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
            font-mono
            font-bold
            border-b-2
            border-[#4a3426]
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
              &gt; AUTHENTICATION_REQUIRED...
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
              LOG<span className="text-[#a0522d]">IN</span>
            </h1>

            <div className="h-0.75 w-24 bg-[#a0522d] mt-3" />
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

          {/* Login Button */}
          <button
            onClick={onLogin}
            disabled={disabledButton || loading}
            className={`
              w-full
              border-2
              border-[#4a3426]
              py-3
              font-mono
              font-black
              tracking-widest
              uppercase
              transition-all

              ${
                disabledButton || loading
                  ? `
                    bg-[#c9b99a]
                    text-[#8b6f47]
                    cursor-not-allowed
                    opacity-70
                  `
                  : `
                    bg-[#a0522d]
                    text-[#f8f0df]
                    hover:bg-[#4a3426]
                    hover:text-[#f3ead8]
                    hover:shadow-[5px_5px_0px_#c9b99a]
                    active:translate-y-0.5
                    cursor-pointer
                  `
              }
            `}
          >
            {loading ? "[ AUTHENTICATING... ]" : "[ ACCESS SYSTEM ]"}
          </button>

          {/* Signup */}
          <p className="text-center text-xs font-mono text-[#8b6f47] mt-6">

            NEW_USER?

            <Link
              href="/signup"
              className="
                ml-2
                text-[#a0522d]
                font-bold
                hover:text-[#3b2a20]
                hover:underline
              "
            >
              CREATE_ACCOUNT_
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
          <span>
            AUTH: {loading ? "PROCESSING..." : "READY"}
          </span>

          <span>
            SERVER: CONNECTED
          </span>
        </div>

      </div>
    </main>
  );
}


