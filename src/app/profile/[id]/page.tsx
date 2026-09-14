export default async function ProfilePage ({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const { id } = await params;

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
          absolute inset-0
          opacity-[0.08]
          bg-[linear-gradient(to_bottom,transparent_50%,#3b2a20_50%)]
          bg-length-[100%_4px]
        "
      />

      {/* Profile Terminal */}
      <div
        className="
          relative
          w-full
          max-w-lg
          bg-[#f8f0df]
          border-2
          border-[#4a3426]
          shadow-[10px_10px_0px_#8b6f47]
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


        {/* Profile Content */}
        <div className="p-6 md:p-8">

          {/* System Message */}
          <p className="text-xs text-[#8b6f47] font-mono mb-3">
            &gt; ACCESSING_USER_PROFILE...
          </p>


          {/* Title */}
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
            PRO<span className="text-[#a0522d]">FILE</span>
          </h1>

          <div className="h-0.75 w-24 bg-[#a0522d] mt-3 mb-8" />


          {/* User ID Box */}
          <div className="border-2 border-[#9b8061] bg-[#eee2cc]">

            <div
              className="
                border-b-2
                border-[#9b8061]
                px-4
                py-2
                bg-[#e3d5bd]
                font-mono
                text-xs
                text-[#6f5238]
              "
            >
              USER_IDENTIFIER
            </div>

            <div className="p-5">

              <p className="text-xs text-[#8b6f47] font-mono mb-2">
                ID:
              </p>

              <p
                className="
                  text-2xl
                  md:text-3xl
                  font-black
                  font-mono
                  text-[#a0522d]
                  break-all
                "
              >
                {id}
              </p>

            </div>

          </div>


          {/* Status */}
          <div className="mt-6 grid grid-cols-2 gap-4">

            <div className="border-2 border-[#9b8061] p-4 bg-[#eee2cc]">
              <p className="text-[10px] font-mono text-[#8b6f47]">
                CLIENT
              </p>

              <p className="mt-1 font-mono font-bold text-[#3b2a20]">
                ONLINE
              </p>
            </div>


            <div className="border-2 border-[#9b8061] p-4 bg-[#eee2cc]">
              <p className="text-[10px] font-mono text-[#8b6f47]">
                SERVER
              </p>

              <p className="mt-1 font-mono font-bold text-[#3b2a20]">
                CONNECTED
              </p>
            </div>

          </div>


          {/* Terminal Message */}
          <p className="mt-8 text-xs font-mono text-[#8b6f47]">
            &gt; PROFILE_ACCESS_GRANTED_
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
          <span>USER: {id}</span>
          <span>STATUS: 200</span>
        </div>

      </div>

    </main>
  );
}