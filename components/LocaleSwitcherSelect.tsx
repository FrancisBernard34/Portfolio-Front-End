"use client";

import { FaChevronDown } from "react-icons/fa";

type Props = {
  defaultValue: string;
  label: string;
  onToggle: () => void;
  isOpen: boolean;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  label,
  onToggle,
  isOpen,
}: Props) {
  return (
    <button
      className="inline-flex items-center gap-1 rounded-md border border-light_orange px-3 py-2 text-sm text-gray-500 hover:bg-light_orange/10 focus:outline-none focus:ring-2 focus:ring-light_orange transition-colors"
      onClick={onToggle}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
    >
      <p className="sr-only">{label}</p>
      <span>{defaultValue}</span>
      <FaChevronDown className={`transition-transform text-light_orange ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  );
}
