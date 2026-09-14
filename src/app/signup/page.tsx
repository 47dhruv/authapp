
"use client";

// React hooks
import React, { useEffect, useState } from "react";

// Next.js
import Link from "next/link";
import { useRouter } from "next/navigation";

// Axios for API requests
import axios from "axios";

// Toast notifications
import { toast } from "react-hot-toast";

export default function SignupPage() {
  // ================================
  // USER FORM STATE
  // ================================
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  // Next.js router
  const router = useRouter();

  // ================================
  // BUTTON & LOADING STATE
  // ================================

  // Controls whether signup button is disabled
  const [disabledButton, setdisabledButton] = useState(true);

  // Controls loading state while API request is running
  const [loading, setloading] = useState(false);

  // ================================
  // CHECK FORM INPUTS
  // ================================
  // Whenever user changes any input,
  // check whether all fields contain something.
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      // All fields are filled
      setdisabledButton(false);
    } else {
      // At least one field is empty
      setdisabledButton(true);
    }
  }, [user]);

  // ================================
  // SIGNUP FUNCTION
  // ================================
  const onSignup = async () => {
    try {
      // Start loading
      setloading(true);

      // Send signup data to backend
      const response = await axios.post("/api/users/signup", user);

      // Check response in browser console
      console.log("Signup success:", response.data);

      // Show success toast
      toast.success("ACCOUNT CREATED SUCCESSFULLY!");

      // Redirect user to login page
      router.push("/login");
    } catch (error) {
      // Print error for debugging
      console.log("Signup error:", error);

      // Check if error came from Axios
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message ||
            "SIGNUP FAILED. PLEASE TRY AGAIN!"
        );
      } else {
        toast.error("SOMETHING WENT WRONG!");
      }
    } finally {
      // Stop loading whether request succeeds or fails
      setloading(false);
    }
  };

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
          bg-length-[100%_4px]
        "
      />

      {/* =====================================
          MAIN TERMINAL / SIGNUP CARD
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
              TITLE
          ====================================== */}
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
              SIGN
              <span className="text-[#a0522d]">
                UP
              </span>
            </h1>

            <div className="h-1 w-24 bg-[#a0522d] mt-3" />
          </div>

          {/* =====================================
              USERNAME INPUT
          ====================================== */}
          <div className="mb-5">

            <label
              className="
                block
                text-xs
                font-mono
                mb-2
                text-[#6f5238]
              "
            >
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

          {/* =====================================
              EMAIL INPUT
          ====================================== */}
          <div className="mb-5">

            <label
              className="
                block
                text-xs
                font-mono
                mb-2
                text-[#6f5238]
              "
            >
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

          {/* =====================================
              PASSWORD INPUT
          ====================================== */}
          <div className="mb-6">

            <label
              className="
                block
                text-xs
                font-mono
                mb-2
                text-[#6f5238]
              "
            >
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

          {/* =====================================
              SIGNUP BUTTON
          ====================================== */}
          <button
            onClick={onSignup}

            // Disable button if:
            // 1. Any field is empty
            // 2. API request is running
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
                    shadow-[3px_3px_0px_#8b6f47]
                  `
                  : `
                    bg-[#a0522d]
                    text-[#f8f0df]
                    hover:bg-[#4a3426]
                    hover:text-[#f3ead8]
                    hover:shadow-[5px_5px_0px_#c9b99a]
                    active:translate-y-0.5
                  `
              }
            `}
          >
            {/* Change button text according to state */}
            {loading
              ? "[ CREATING_ACCOUNT... ]"
              : disabledButton
              ? "[ ENTER ALL FIELDS ]"
              : "[ CREATE ACCOUNT ]"}
          </button>

          {/* =====================================
              LOGIN LINK
          ====================================== */}
          <p
            className="
              text-center
              text-xs
              font-mono
              text-[#8b6f47]
              mt-6
            "
          >
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

