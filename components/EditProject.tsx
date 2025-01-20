"use client";

import { useEffect, useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CircleX, X } from "lucide-react";
import { editProject } from "@/app/actions/editProject";
import { Project, Category } from "@/types/project";
import { availableTechnologies } from "@/app/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

// Submit Button Component with pending state
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full p-3 rounded-md bg-[#f47e00] text-[#1E1E1E] hover:bg-[#b75f00] transition-colors terminal-text disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Updating_..." : "Update_Project"}
    </button>
  );
}

type EditProjectProps = {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
};

type State = {
  status: "idle" | "error" | "success";
  message?: string;
  errors?: {
    id?: string[];
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

export default function EditProject({ isOpen, onClose, project }: EditProjectProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const initialState: State = {
    status: "idle",
    message: "",
    errors: {},
  };

  const [state, formAction] = useActionState(editProject, initialState);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    project.technologies
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
      alert("Project updated successfully");
      onClose();
      window.location.reload();
    }
  }, [state, onClose]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.2 }}
            className="fixed top-1/2 left-1/2 w-[90%] max-w-4xl max-h-[85vh] overflow-y-auto bg-[#1E1E1E] rounded-xl p-6 shadow-xl z-[10000]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              aria-label="Close edit modal"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="w-fit text-2xl font-bold bg-[#343434] rounded-md p-2 mb-6 text-white">
              Edit Project
            </h2>

            <form action={formAction} className="flex flex-col gap-4">
              {/* Error Messages */}
              {state?.status === "error" && (
                <div className="p-3 rounded-lg bg-red-100 border border-red-300 text-red-500 text-sm terminal-text">
                  {state.message || "Please resolve the errors and try again."}
                </div>
              )}

              {/* Hidden Project ID */}
              <input type="hidden" name="id" value={project.id} />

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
                  defaultValue={project.title}
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
                  defaultValue={project.description}
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
                    {availableTechnologies.map((tech: string) => (
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
                  {selectedTechnologies.map((tech: string, index: number) => (
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
                  defaultValue={project.imageUrl}
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
                  defaultValue={project.liveUrl}
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
                  defaultValue={project.githubUrl}
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
                  defaultValue={project.featured.toString()}
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
                  defaultValue={project.importance}
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
                  defaultValue={project.category}
                  name="category"
                  id="category"
                  className="w-1/3 p-3 rounded-md bg-[#2a2a2a] text-white terminal-text"
                >
                  {Object.values(Category).map((category: Category) => (
                    <option key={category} value={category}>
                      {category.replace("_", " ")}
                    </option>
                  ))}
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;

  return createPortal(modalContent, document.body);
} 