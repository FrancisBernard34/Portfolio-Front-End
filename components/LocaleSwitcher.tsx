import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "@/components/LocaleSwitcherSelect";
import LocaleOptions from "@/components/LocaleOptions";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const updatePosition = () => {
    if (selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: Math.max(0, rect.left + window.scrollX)
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      updatePosition();
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen]);

  const toggleOptions = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div ref={selectRef} className="relative">
      <LocaleSwitcherSelect 
        defaultValue={locale.toUpperCase()} 
        label={t("label")} 
        onToggle={toggleOptions}
        isOpen={isOpen}
      />
      {isOpen && createPortal(
        <LocaleOptions 
          onClose={() => setIsOpen(false)} 
          style={{
            position: 'absolute',
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            zIndex: 9999
          }}
        />,
        document.body
      )}
    </div>
  );
}