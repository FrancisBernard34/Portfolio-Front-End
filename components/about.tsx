import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#D35F0C] text-[#1E1E1E] py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 terminal-text">About_Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl mb-6 terminal-text">
              Hello! I&apos;m Francis Bernard, as you might have guessed from
              the big flashy title above. My journey in programming began in
              2020, exploring various domains including game development and
              mobile applications.
            </p>
            <p className="text-xl mb-6 terminal-text">
              Along the way, I discovered my passion for web development, which
              led me to specialize in this field. Now, I&apos;m a dedicated
              full-stack developer, driven by the challenge of crafting elegant
              solutions for complex problems.
            </p>
            <p className="text-xl mb-6 terminal-text">
              I specialize in Next.js, TypeScript, Nest, MongoDB, and Tailwind
              CSS to create responsive, high-performance web apps. With
              experience in both front-end and back-end development, I enjoy
              building complete applications from the ground up.
            </p>
            <p className="text-xl terminal-text">
              When I&apos;m not coding, you can find me playing guitar, reading
              a good book, or immersing myself in video games.
            </p>
          </div>
          <div className="aspect-square bg-[#1E1E1E]/10 flex items-center justify-center select-none pointer-events-none">
            <Image src="/profile.png" alt="Profile" width={600} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
}
