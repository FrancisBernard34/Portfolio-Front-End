"use client";

import { useState, useEffect, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { logoutUser } from "../actions/logouUser";
import Image from "next/image";
import { getProjects } from "../actions/getProjects";
import { deleteProject } from "../actions/deleteProject";
import { Project } from "@/types/project";
import { AppWindowMac, CircleX } from "lucide-react";
import { createProject } from "../actions/createProject";
import EditProject from "../../components/EditProject";
import { availableTechnologies } from "../lib/constants";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-1/3 mt-4 p-4 text-base bg-[#f47e00] text-white terminal-text hover:bg-[#b75f00] rounded-xl transition-colors cursor ${
        pending ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {pending ? "Loading" : "Create"}
    </button>
  );
}

type State = {
  status: "idle" | "error" | "success";
  message?: string;
  errors?: {
    title?: string[];
    description?: string[];
    imageUrl?: string[];
    technologies?: string[];
    liveUrl?: string[];
    githubUrl?: string[];
    featured?: string[];
    importance?: string[];
    category?: string[];
  };
  data?: Project;
};

function Projects({ currentSection }: { currentSection: Section }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      // Sort projects by importance and date
      const sortedData = data.sort(
        (a, b) =>
          b.importance - a.importance ||
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setProjects(sortedData);
    };
    fetchProjects();
  }, []);

  const categories = [
    "all",
    "DEFAULT",
    ...new Set(
      projects
        .map((project) => project.category)
        .filter((category) => category !== "DEFAULT")
    ),
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  async function handleDeleteProject(id: string) {
    const response = confirm("Do you want to delete this project?");
    if (response) {
      const status = await deleteProject(id);
      if (status === 200) {
        setProjects(projects.filter((project) => project.id !== id));
        alert("Project deleted successfully");
      } else {
        alert("Failed to delete project");
      }
    }
  }

  const handleEditClick = (project: Project) => {
    setEditingProject(project);
  };

  const handleCloseEdit = () => {
    setEditingProject(null);
  };

  return (
    <div
      className={
        currentSection === "projects" ? "flex flex-col gap-4" : "hidden"
      }
    >
      <h2 className="w-fit text-2xl font-bold bg-[#343434] rounded-md p-2">Projects</h2>
      {/* Category Filter */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 text-sm sm:text-base py-2 rounded-md terminal-text transition-colors
                ${
                  selectedCategory === category
                    ? "bg-[#f47e00] text-[#1E1E1E]"
                    : "border border-[#f47e00] text-[#f47e00] hover:bg-[#de780b] hover:text-[#1E1E1E]"
                }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`relative flex flex-col border-2 ${
              project.featured ? "border-[#f47e00]" : "border-gray-600"
            } 
                rounded-lg h-[70vh] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                bg-[#2A2A2A] group`}
          >
            {project.featured && (
              <div className="absolute top-4 right-4 bg-[#f47e00] text-[#1E1E1E] px-3 py-1 rounded-full terminal-text z-10">
                Featured
              </div>
            )}

            <div className="relative h-[45vh] sm:h-[50vh] md:h-[25vh] lg:h-[50vh] 2xl:h-[35vh] overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold terminal-text text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base mb-6 text-left text-gray-300 line-clamp-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-sm px-3 py-1 rounded-full bg-[#3A3A3A] text-[#f47e00] terminal-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 text-sm sm:text-base">
                <button
                  onClick={() => handleEditClick(project)}
                  className="flex-1 text-center px-4 py-2 rounded-md bg-[#f47e00] text-[#1E1E1E] 
                        hover:bg-[#b75f00] transition-colors terminal-text"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  className="flex-1 text-center px-4 py-2 rounded-md border border-[#f40000] 
                      text-[#f40000] hover:bg-[#a20000] hover:text-white transition-colors terminal-text"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Project Modal */}
      {editingProject && (
        <EditProject
          isOpen={!!editingProject}
          onClose={handleCloseEdit}
          project={editingProject}
        />
      )}
    </div>
  );
}

function CreateProject({ currentSection }: { currentSection: Section }) {
  const initialState: State = {
    status: "idle",
    message: "",
    errors: {},
  };

  const [state, formAction] = useActionState(createProject, initialState);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );
  const [newTechnology, setNewTechnology] = useState<string>("");

  const handleAddTechnology = () => {
    if (newTechnology && !selectedTechnologies.includes(newTechnology)) {
      setSelectedTechnologies([...selectedTechnologies, newTechnology]);
      setNewTechnology("");
    }
  };

  const handleRemoveTechnology = (
    technology: string,
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    const newTechnologies = selectedTechnologies.filter(
      (tech) => tech !== technology
    );
    setSelectedTechnologies(newTechnologies);
  };

  useEffect(() => {
    if (state?.status === "success") {
      alert("Project created successfully");
      window.location.reload();
    }
  }, [state]);

  return (
    <div
      className={
        currentSection === "create-project" ? "flex flex-col gap-4" : "hidden"
      }
    >
      <h2 className="w-fit text-2xl font-bold bg-[#343434] rounded-md p-2">
        Create Project
      </h2>
      <form action={formAction} className="flex flex-col gap-4">
        {/* Error Messages */}
        {state?.status === "error" && (
          <div className="p-3 rounded-lg bg-red-100 border border-red-300 text-red-500 text-sm terminal-text">
            {state.message || "Please resolve the errors and try again."}
          </div>
        )}

        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-base mb-2 terminal-text text-[#d46d00]"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full p-2 rounded-md bg-[#2a2a2a] text-white terminal-text"
          />
          {state?.errors?.title && (
            <p
              id="title-error"
              className="mt-1 text-sm text-red-500 terminal-text"
            >
              {state.errors.title[0]}
            </p>
          )}
        </div>
        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-base mb-2 terminal-text text-[#d46d00]"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            className="w-full p-2 rounded-md bg-[#2a2a2a] text-white terminal-text resize-none"
          />
          {state?.errors?.description && (
            <p
              id="description-error"
              className="mt-1 text-sm text-red-500 terminal-text"
            >
              {state.errors.description[0]}
            </p>
          )}
        </div>
        {/* Technologies */}
        <div>
          <label
            htmlFor="technologies"
            className="block text-base mb-2 terminal-text text-[#d46d00]"
          >
            Technologies
          </label>
          <input
            type="hidden"
            name="technologies"
            value={JSON.stringify(selectedTechnologies)}
          />
          <div className="flex justify-start items-center flex-row gap-2">
            <select
              value={newTechnology}
              onChange={(e) => setNewTechnology(e.target.value)}
              className="w-1/3 p-3 rounded-md bg-[#2a2a2a] text-white terminal-text"
            >
              <option disabled value="">
                Select a technology
              </option>
              {availableTechnologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={handleAddTechnology}
              className="p-2 rounded-md bg-[#f47e00] text-[#1E1E1E] hover:bg-[#b75f00] transition-colors terminal-text"
            >
              Add
            </button>
          </div>
          <div className="mt-4 flex flex-wrap">
            {selectedTechnologies.map((tech, index) => (
              <div
                key={index}
                className="w-fit flex items-center gap-2 mr-2 mb-2 px-3 py-1 rounded-full bg-[#3A3A3A] text-[#f47e00] terminal-text"
              >
                <span>{tech}</span>
                <CircleX
                  color="#aa6600"
                  onClick={(e) => handleRemoveTechnology(tech, e)}
                  className="cursor-pointer hover:text-[#f47e00] transition-colors"
                />
              </div>
            ))}
          </div>
          {state?.errors?.technologies && (
            <p
              id="technologies-error"
              className="mt-1 text-sm text-red-500 terminal-text"
            >
              {state.errors.technologies[0]}
            </p>
          )}
        </div>
        {/* Image URL */}
        <div>
          <label
            htmlFor="imageUrl"
            className="block text-base mb-2 terminal-text text-[#d46d00]"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            className="w-full p-2 rounded-md bg-[#2a2a2a] text-white terminal-text"
          />
          {state?.errors?.imageUrl && (
            <p
              id="imageUrl-error"
              className="mt-1 text-sm text-red-500 terminal-text"
            >
              {state.errors.imageUrl[0]}
            </p>
          )}
        </div>
        {/* Live URL */}
        <div>
          <label
            htmlFor="liveUrl"
            className="block text-base mb-2 terminal-text text-[#d46d00]"
          >
            Live URL
          </label>
          <input
            type="text"
            id="liveUrl"
            name="liveUrl"
            className="w-full p-2 rounded-md bg-[#2a2a2a] text-white terminal-text"
          />
          {state?.errors?.liveUrl && (
            <p
              id="liveUrl-error"
              className="mt-1 text-sm text-red-500 terminal-text"
            >
              {state.errors.liveUrl[0]}
            </p>
          )}
        </div>
        {/* Github URL */}
        <div>
          <label
            htmlFor="githubUrl"
            className="block text-base mb-2 terminal-text text-[#d46d00]"
          >
            Github URL
          </label>
          <input
            type="text"
            id="githubUrl"
            name="githubUrl"
            className="w-full p-2 rounded-md bg-[#2a2a2a] text-white terminal-text"
          />
          {state?.errors?.githubUrl && (
            <p
              id="githubUrl-error"
              className="mt-1 text-sm text-red-500 terminal-text"
            >
              {state.errors.githubUrl[0]}
            </p>
          )}
        </div>
        {/* Featured */}
        <div>
          <label
            htmlFor="featured"
            className="block text-base mb-2 terminal-text text-[#d46d00]"
          >
            Featured
          </label>
          <select
            name="featured"
            id="featured"
            defaultValue="false"
            className="w-1/3 p-3 rounded-md bg-[#2a2a2a] text-white terminal-text"
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
          {state?.errors?.featured && (
            <p
              id="featured-error"
              className="mt-1 text-sm text-red-500 terminal-text"
            >
              {state.errors.featured[0]}
            </p>
          )}
        </div>
        {/* Importance */}
        <div>
          <label
            htmlFor="importance"
            className="block text-base mb-2 terminal-text text-[#d46d00]"
          >
            Importance
          </label>
          <input
            type="number"
            id="importance"
            name="importance"
            className="w-1/3 p-2 rounded-md bg-[#2a2a2a] text-white terminal-text"
          />
          {state?.errors?.importance && (
            <p
              id="importance-error"
              className="mt-1 text-sm text-red-500 terminal-text"
            >
              {state.errors.importance[0]}
            </p>
          )}
        </div>
        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-base mb-2 terminal-text text-[#d46d00]"
          >
            Category
          </label>
          <select
            defaultValue="DEFAULT"
            name="category"
            id="category"
            className="w-1/3 p-3 rounded-md bg-[#2a2a2a] text-white terminal-text"
          >
            <option value="DEFAULT">Default</option>
            <option value="FRONT_END">Frontend</option>
            <option value="BACK_END">Backend</option>
            <option value="FULL_STACK">Fullstack</option>
            <option value="MOBILE">Mobile</option>
            <option value="GAME">Game</option>
          </select>
          {state?.errors?.category && (
            <p
              id="category-error"
              className="mt-1 text-sm text-red-500 terminal-text"
            >
              {state.errors.category[0]}
            </p>
          )}
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}

type Section = "projects" | "create-project";

export default function Dashboard() {
  const [currentSection, setCurrentSection] = useState<Section>("projects");

  return (
    <main className="flex flex-row w-full h-screen bg-[#1E1E1E] p-8 gap-10 text-white">
      <aside className="w-[14%] flex flex-col gap-8 items-left bg-[#f47e00] rounded-2xl p-8">
        <div className="flex gap-2 items-center justify-center border-b-2 border-[#ffffff] pointer-events-none select-none bg-[#353328] rounded-md text-center p-2">
          <AppWindowMac />
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        <nav className="h-full flex flex-col items-start justify-between gap-4">
          <div className="flex flex-col items-start gap-4">
            <button
              onClick={() => setCurrentSection("projects")}
              className="text-white bg-[#1E1E1E]/90 p-4 hover:bg-[#000000]/50 transition-colors duration-300 rounded-md"
            >
              See all projects
            </button>
            <button
              onClick={() => setCurrentSection("create-project")}
              className="text-white bg-[#1E1E1E]/90 p-4 hover:bg-[#000000]/50 transition-colors duration-300 rounded-md"
            >
              Create a project
            </button>
          </div>
          <button
            onClick={() => logoutUser()}
            className="bg-[#1E1E1E] hover:bg-[#000000]/50 transition-colors duration-300 w-full p-2 rounded-md shadow-md"
          >
            Logout
          </button>
        </nav>
      </aside>
      <section className="w-[85%] bg-[#171717] flex flex-col p-8 gap-4 rounded-2xl overflow-y-auto">
        <Projects currentSection={currentSection} />
        <CreateProject currentSection={currentSection} />
      </section>
    </main>
  );
}
