import React, { useState, useRef, useEffect } from "react";

export default function GlassSelect({ className = "", children, name, value, onChange, required, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Extract option values, labels, and disabled states from children
  const options = React.Children.toArray(children)
    .filter((child) => child.type === "option")
    .map((child) => ({
      value: child.props.value,
      label: child.props.children,
      disabled: child.props.disabled || false,
    }));

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val) => {
    if (onChange) {
      // Simulate native change event structure
      onChange({
        target: {
          name: name,
          value: val,
        },
      });
    }
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Hidden native select for native accessibility & EmailJS form integration */}
      <select
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        className="sr-only"
        tabIndex={-1}
        {...props}
      >
        {children}
      </select>

      {/* Custom styled glassmorphic button trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none backdrop-blur-xl transition duration-300 hover:bg-white/[0.06] focus:border-white/20 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(255,255,255,0.03)] cursor-pointer text-start ${className}`}
      >
        <span className={!value ? "text-white/40" : "text-white"}>
          {selectedOption ? selectedOption.label : ""}
        </span>
        <svg
          className={`h-4 w-4 text-white/50 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Glassmorphic Options Dropdown List */}
      {isOpen && (
        <div className="absolute left-0 z-50 mt-2 w-full origin-top-right rounded-2xl border border-white/10 bg-black/60 p-1.5 shadow-2xl backdrop-blur-2xl">
          {/* Subtle top light effect */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="max-h-60 overflow-y-auto pr-1">
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                disabled={opt.disabled}
                onClick={() => handleSelect(opt.value)}
                className={`w-full rounded-xl px-4 py-2.5 text-start text-sm transition duration-200 cursor-pointer ${
                  opt.disabled
                    ? "text-white/30 hidden" // Hide placeholder option from lists
                    : opt.value === value
                    ? "bg-white/10 text-white font-medium border border-white/5"
                    : "text-white/70 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
