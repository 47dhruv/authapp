export default function NotFound() {
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

      <div className="relative text-center font-mono">

        {/* System Error */}
        <p className="mb-4 text-sm text-green-400">
          &gt; SYSTEM ERROR
        </p>

        {/* 404 */}
        <h1
          className="
            text-[120px]
            md:text-[200px]
            font-black
            leading-none
            text-transparent
            bg-clip-text
            bg-linear-to-b
            from-[#ff3c00]
            to-[#ff8c00]
            drop-shadow-[6px_6px_0px_#7a1800]
          "
        >
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-4xl text-white uppercase tracking-[0.3em]">
          Page Not Found
        </h2>

        {/* Error information */}
        <p className="mt-6 text-gray-500 leading-7">
          LOCATION: UNKNOWN
          <br />
          STATUS: ERROR
        </p>

        {/* Home button */}
        <a
          href="/"
          className="
            inline-block
            mt-8
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
          [ Return Home ]
        </a>

        {/* Footer */}
        <p className="mt-10 text-xs text-gray-700">
          © 2026 // SYSTEM_FAILURE
        </p>

      </div>
    </main>
  );
}