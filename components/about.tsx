import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-[#f47e00] text-[#1E1E1E] py-20"
    >
      <div className="w-full lg:container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 pl-4 lg-max:pl-0 terminal-text text-white">
          About_Me
        </h2>
        <div className="w-full flex flex-col lg-max:flex-row gap-8 xl:gap-12 items-center justify-center selection:bg-gray-300">
          <div className="w-[90%] lg:w-2/3 bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg relative overflow-hidden">
            {/* Floating Circles */}
            <div className="floating-circle floating-circle-1 top-[-20px] left-[-20px]" />
            <div className="floating-circle floating-circle-2 bottom-[-40px] right-[270px] sm-max:right-[450px]" />
            <div className="floating-circle floating-circle-3 top-[40%] left-[70%]" />

            <p className="text-base sm:text-xl mb-6 terminal-text text-left">
              Hello! I&apos;m{" "}
              <span className="text-[#D35F0C] font-semibold">
                Francis Bernard
              </span>
              , as you might have guessed from the big flashy title above. My
              journey in{" "}
              <span className="text-[#D35F0C] font-semibold">programming</span>{" "}
              began in
              <span className="text-[#D35F0C] font-semibold"> 2020</span>,
              exploring various domains including{" "}
              <span className="text-[#D35F0C] font-semibold">
                game development
              </span>{" "}
              and
              <span className="text-[#D35F0C] font-semibold">
                {" "}
                mobile applications
              </span>
              .
            </p>
            <p className="text-base sm:text-xl mb-6 terminal-text text-left">
              Along the way, I discovered my passion for{" "}
              <span className="text-[#D35F0C] font-semibold">
                web development
              </span>
              , which led me to specialize in this field. Now, I&apos;m a
              dedicated
              <span className="text-[#D35F0C] font-semibold">
                {" "}
                full-stack developer
              </span>
              , driven by the challenge of crafting elegant solutions for
              complex problems.
            </p>
            <p className="text-base sm:text-xl mb-6 terminal-text text-left">
              I specialize in{" "}
              <span className="text-[#D35F0C] font-semibold">Next.js</span>,{" "}
              <span className="text-[#D35F0C] font-semibold">TypeScript</span>,{" "}
              <span className="text-[#D35F0C] font-semibold">Nest</span>,{" "}
              <span className="text-[#D35F0C] font-semibold">MongoDB</span>, and{" "}
              <span className="text-[#D35F0C] font-semibold">Tailwind CSS</span>{" "}
              to create{" "}
              <span className="text-[#D35F0C] font-semibold">responsive</span>,{" "}
              <span className="text-[#D35F0C] font-semibold">
                high-performance web apps
              </span>
              .
            </p>
            <p className="text-base sm:text-xl terminal-text text-left">
              When I&apos;m not coding, you can find me playing{" "}
              <span className="text-[#D35F0C] font-semibold">guitar</span>,
              reading a good{" "}
              <span className="text-[#D35F0C] font-semibold">book</span>, or
              immersing myself in{" "}
              <span className="text-[#D35F0C] font-semibold">video games</span>.
            </p>
          </div>
          <div className="w-fit p-10 aspect-square bg-white/10 rounded-xl flex items-center justify-center select-none pointer-events-none">
            <Image
              className="w-[200px] h-[200px] sm-min:w-[200px] sm-min:h-[200px] lg:w-[300px] lg:h-[300px] 2xl:w-[500px] 2xl:h-[500px] "
              src="/profile.png"
              alt="Profile"
              width={600}
              height={600}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
