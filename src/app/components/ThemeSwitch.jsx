// components/ThemeSwitch.jsx
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
    >
      {theme === "dark" ? (
        <span className="text-yellow-300">☀️</span>
      ) : (
        <span className="text-gray-700">🌙</span>
      )}
      <span className="ml-2">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}
