import { MdArrowOutward } from "react-icons/md";

export default function About() {
  return (
    <div className="w-full min-h-screen grid md:grid-cols-2 place-items-center bg-gradient-to-t from-white via-[#C8DFB2]/50 to-white">
      <div className="flex flex-col justify-center items-center gap-8 p-10 ml-25">
        <h1>
          Why Take a <span className="text-[#6B8F71]">Digital Detox?</span>
        </h1>
        <p>
          In our always-connected world, constant notifications and screens can
          heighten stress, reduce focus, and drain mental energy.
        </p>
        <h3>
          <span className="text-[#C58B36]">
            Reconnect is a 3-day guided online challenge
          </span>{" "}
          that helps you unplug, reset, and realign with what truly matters —
          yourself.
        </h3>
        <h2>
          Your <span className="text-[#6B8F71]">3-Day Journey</span> to Reconnect
        </h2>
      </div>

      <div className="relative flex flex-col items-start justify-center gap-12 p-10">
        <div className="absolute left-[80px] top-[-50] bottom-[-50] w-[2px] z-0 bg-gradient-to-b from-[#cfe4e2] via-[#65B0AA] via-[#058075] via-[#80BEB9] to-[#cfe4e2]"></div>
        <div className="flex flex-row gap-10 z-10">
          <div className="w-20 h-20 rounded-full bg-[#2F4F4F]"></div>
          <div>
            <h3>Day 1</h3>
            <p>Unplug & Breathe</p>
            <p className="mini-text bg-highlight rounded-full inline-flex items-center gap-1 py-1 px-2 shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer mt-4">
              Learn More
              <MdArrowOutward />
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-10 z-10">
          <div className="w-20 h-20 rounded-full bg-[#6B8F71]"></div>
          <div>
            <h3>Day 2</h3>
            <p>Reconnect with the Present</p>
            <p className="mini-text bg-highlight rounded-full inline-flex items-center gap-1 py-1 px-2 shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer mt-4">
              Learn More
              <MdArrowOutward />
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-10 z-10">
          <div className="w-20 h-20 rounded-full bg-[#6B8F71] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"></div>
          <div>
            <h3>Day 3</h3>
            <p>Reflect & Reset</p>
            <p className="mini-text bg-highlight hover:scale-105 transition-transform duration-300 ease-in-out rounded-full inline-flex items-center gap-1 py-1 px-2 shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer mt-4">
              Learn More
              <MdArrowOutward />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
