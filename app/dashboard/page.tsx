"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { logoutUser } from "../actions/logouUser";

function Projects() {
  return <div>Projects</div>;
}

function CreateProject() {
  return <div>Create Project</div>;
}

enum Section {
  Projects = "projects",
  CreateProject = "create-project",
}

export default function Dashboard() {
  const [currentSection, setCurrentSection] = useState(Section.Projects);
  const router = useRouter();

  async function handleLogout() {
    await logoutUser();
    router.push("/login");
  }

  return (
    <main className="flex flex-row w-full h-screen bg-transparent p-8 gap-10 text-white">
      <aside className="w-[18%] flex flex-col gap-4 items-left bg-[#f47e00] rounded-2xl p-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <nav className="h-full flex flex-col items-start justify-between gap-4">
          <div className="flex flex-col items-start gap-4">
            <button onClick={() => setCurrentSection(Section.Projects)}>See all projects</button>
            <button onClick={() => setCurrentSection(Section.CreateProject)}>Create a new project</button>
          </div>
          <button onClick={handleLogout} className="bg-[#df3d3d] w-full p-2 rounded-md shadow-md">Logout</button>
        </nav>
      </aside>
      <section className="w-[80%] bg-[#da8787] flex flex-col p-8 gap-4 rounded-2xl">
        {currentSection === Section.Projects && <Projects />}
        {currentSection === Section.CreateProject && <CreateProject />}
      </section>
    </main>
  );
}

