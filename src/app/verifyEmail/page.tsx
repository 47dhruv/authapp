"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyEmail = async () => {
    try {
      await axios.post("/api/users/verifyEmail", token);

      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error?.response?.data);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
  const urlToken = searchParams.get("token") || "";

  setToken(urlToken);

  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyEmail();
    }
  }, [token]);

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

          {/* TITLE */}
          <div className="mb-8">

            <p className="text-xs text-[#8b6f47] mb-2 font-mono">
              &gt; VERIFYING_EMAIL_ADDRESS...
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
              VERIFY
              <span className="text-[#a0522d]">
                EMAIL
              </span>
            </h1>

            <div className="h-1 w-24 bg-[#a0522d] mt-3" />

          </div>

          {/* =====================================
              VERIFICATION STATUS
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

            {!verified && !error && (
              <>
                <p className="text-[#a0522d] text-sm mb-4">
                  &gt; SYSTEM_STATUS
                </p>

                <p className="text-[#6f5238] text-sm leading-7">
                  AUTHENTICATING EMAIL...
                  <br />
                  PLEASE WAIT...
                </p>

                <div className="mt-5 h-2 w-full bg-[#c9b99a] overflow-hidden">
                  <div className="h-full w-2/3 bg-[#a0522d] animate-pulse" />
                </div>
              </>
            )}

            {/* =====================================
                SUCCESS
            ====================================== */}
            {verified && (
              <>
                <p className="text-[#a0522d] text-sm mb-4">
                  &gt; VERIFICATION_SUCCESS
                </p>

                <p className="text-[#3b2a20] text-sm leading-7">
                  EMAIL VERIFIED SUCCESSFULLY.
                  <br />
                  YOUR ACCOUNT IS NOW ACTIVE.
                </p>

                <div className="mt-5 border-t-2 border-[#c9b99a] pt-4">
                  <p className="text-[#8b6f47] text-xs">
                    STATUS:
                    <span className="ml-2 text-[#a0522d] font-bold">
                      ● VERIFIED
                    </span>
                  </p>
                </div>
              </>
            )}

            {/* =====================================
                ERROR
            ====================================== */}
            {error && (
              <>
                <p className="text-[#a0522d] text-sm mb-4">
                  &gt; VERIFICATION_FAILED
                </p>

                <p className="text-[#3b2a20] text-sm leading-7">
                  EMAIL VERIFICATION FAILED.
                  <br />
                  INVALID OR EXPIRED TOKEN.
                </p>

                <div className="mt-5 border-t-2 border-[#c9b99a] pt-4">
                  <p className="text-[#8b6f47] text-xs">
                    STATUS:
                    <span className="ml-2 text-[#a0522d] font-bold">
                      ● ERROR
                    </span>
                  </p>
                </div>
              </>
            )}

          </div>

          {/* =====================================
              LOGIN BUTTON
          ====================================== */}
          {verified && (
            <Link
              href="/login"
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
              [ LOGIN ]
            </Link>
          )}

          {/* =====================================
              ERROR → SIGNUP
          ====================================== */}
          {error && (
            <Link
              href="/signup"
              className="
                block
                w-full
                mt-8
                text-center
                border-2
                border-[#4a3426]
                bg-[#c9b99a]
                text-[#3b2a20]
                py-3
                font-mono
                font-black
                tracking-widest
                uppercase
                hover:bg-[#4a3426]
                hover:text-[#f3ead8]
                hover:shadow-[5px_5px_0px_#8b6f47]
                transition-all
              "
            >
              [ CREATE NEW ACCOUNT ]
            </Link>
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