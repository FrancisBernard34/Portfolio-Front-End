export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#1E1E1E] text-[#D35F0C] py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 terminal-text">Projects_</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((project) => (
            <div
              key={project}
              className="border-2 border-[#D35F0C] p-6 hover:bg-[#D35F0C] hover:text-[#1E1E1E] transition-colors cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-4 terminal-text">
                Project_{project}
              </h3>
              <p className="mb-4 terminal-text">
                A brief description of the project and its key features.
                Technologies used and outcomes achieved.
              </p>
              <div className="flex gap-4">
                <span className="text-sm terminal-text">#React</span>
                <span className="text-sm terminal-text">#NextJS</span>
                <span className="text-sm terminal-text">#TypeScript</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
