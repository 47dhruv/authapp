"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // =====================================
  // GET TOKEN FROM URL
  // =====================================
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const urlToken = searchParams.get("token") || "";

    setToken(urlToken);
  }, []);

  // =====================================
  // RESET PASSWORD
  // =====================================
  const resetPassword = async () => {
    try {
      setError(false);

      // Check password
      if (!password || !confirmPassword) {
        setError(true);
        return;
      }

      // Check password match
      if (password !== confirmPassword) {
        setError(true);
        return;
      }

      // Check token
      if (!token) {
        setError(true);
        return;
      }

      setLoading(true);

      // Send request to backend
      await axios.post("/api/users/resetpassword", {
        password: password,
        token: token,
      });

      setSuccess(true);

      // Clear password fields
      setPassword("");
      setConfirmPassword("");

    } catch (error: any) {
      setError(true);

      console.log(
        "Reset Password API Error:",
        error?.response?.data
      );
    } finally {
      setLoading(false);
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
              TITLE
          ====================================== */}
          <div className="mb-8">

            <p className="text-xs text-[#8b6f47] mb-2 font-mono">
              &gt; RESETTING_PASSWORD...
            </p>

            <h1
              className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-black
                  tracking-[0.15em]
                  text-[#3b2a20]
                  drop-shadow-[3px_3px_0px_#c9b99a]
                  break-words
                "
            >
              RESET{" "}
              <span className="text-[#a0522d]">
                PASSWORD
              </span>
            </h1>

            <div className="h-1 w-24 bg-[#a0522d] mt-3" />

          </div>

          {/* =====================================
              SUCCESS SCREEN
          ====================================== */}
          {success ? (
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
                &gt; PASSWORD_RESET_SUCCESS
              </p>

              <p className="text-[#3b2a20] text-sm leading-7">
                PASSWORD CHANGED SUCCESSFULLY.
                <br />
                YOUR ACCOUNT IS NOW SECURE.
              </p>

              <div className="mt-5 border-t-2 border-[#c9b99a] pt-4">

                <p className="text-[#8b6f47] text-xs">
                  STATUS:
                  <span className="ml-2 text-[#a0522d] font-bold">
                    ● PASSWORD UPDATED
                  </span>
                </p>

              </div>

              {/* HOME BUTTON */}
              <Link
                href="/"
                className="
                  block
                  w-full
                  mt-6
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
          ) : (
            <>
              {/* =====================================
                  TOKEN DISPLAY
              ====================================== */}
              <div
                className="
                  mb-5
                  border-2
                  border-[#9b8061]
                  bg-[#eee2cc]
                  p-4
                  font-mono
                "
              >

                <p className="text-xs text-[#8b6f47] mb-2">
                  RESET_TOKEN
                </p>

                <p
                  className="
                    text-xs
                    text-[#3b2a20]
                    break-all
                    leading-5
                  "
                >
                  {token || "TOKEN_NOT_FOUND"}
                </p>

              </div>

              {/* =====================================
                  NEW PASSWORD
              ====================================== */}
              <div className="mb-5">

                <label
                  className="
                    block
                    text-xs
                    font-mono
                    font-bold
                    mb-2
                    text-[#6f5238]
                  "
                >
                  NEW_PASSWORD
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="ENTER NEW PASSWORD"
                  className="
                    w-full
                    bg-[#eee2cc]
                    border-2
                    border-[#9b8061]
                    px-4
                    py-3
                    outline-none
                    font-mono
                    text-sm
                    text-[#3b2a20]
                    placeholder:text-[#9b8061]
                    focus:border-[#a0522d]
                    focus:shadow-[4px_4px_0px_#c9b99a]
                  "
                />

              </div>

              {/* =====================================
                  CONFIRM PASSWORD
              ====================================== */}
              <div className="mb-4">

                <label
                  className="
                    block
                    text-xs
                    font-mono
                    font-bold
                    mb-2
                    text-[#6f5238]
                  "
                >
                  CONFIRM_PASSWORD
                </label>

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="CONFIRM NEW PASSWORD"
                  className="
                    w-full
                    bg-[#eee2cc]
                    border-2
                    border-[#9b8061]
                    px-4
                    py-3
                    outline-none
                    font-mono
                    text-sm
                    text-[#3b2a20]
                    placeholder:text-[#9b8061]
                    focus:border-[#a0522d]
                    focus:shadow-[4px_4px_0px_#c9b99a]
                  "
                />

              </div>

              {/* =====================================
                  PASSWORD MATCH STATUS
              ====================================== */}
              {confirmPassword && (
                <p
                  className="
                    mb-5
                    font-mono
                    text-xs
                  "
                >
                  {password === confirmPassword ? (
                    <span className="text-[#a0522d]">
                      ● PASSWORDS MATCH
                    </span>
                  ) : (
                    <span className="text-[#8b6f47]">
                      ● PASSWORDS DO NOT MATCH
                    </span>
                  )}
                </p>
              )}

              {/* =====================================
                  ERROR MESSAGE
              ====================================== */}
              {error && (
                <div
                  className="
                    mb-5
                    border-2
                    border-[#a0522d]
                    bg-[#eee2cc]
                    p-4
                    font-mono
                    text-xs
                    text-[#a0522d]
                  "
                >
                  &gt; PASSWORD_RESET_FAILED
                  <br />

                  {password !== confirmPassword
                    ? "PASSWORDS DO NOT MATCH."
                    : "INVALID OR EXPIRED TOKEN."}
                </div>
              )}

              {/* =====================================
                  RESET BUTTON
              ====================================== */}
              <button
                onClick={resetPassword}
                disabled={
                  loading ||
                  !password ||
                  !confirmPassword ||
                  !token ||
                  password !== confirmPassword
                }
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
                  transition-all
                  active:translate-y-0.5
                  disabled:bg-[#c9b99a]
                  disabled:text-[#8b6f47]
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                  disabled:shadow-[3px_3px_0px_#8b6f47]
                "
              >
                {loading
                  ? "[ RESETTING... ]"
                  : "[ RESET PASSWORD ]"}
              </button>

            </>
          )}

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