"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useMemo } from "react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = useMemo(() => resolvedTheme === "dark", [resolvedTheme]);
  return (
    <button
      title={`Toggle ${isDark ? "Dark" : "Light"} Theme`}
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <FontAwesomeIcon
        icon={isDark ? faSun : faMoon}
        className="dark:text-yellow-300"
      />
    </button>
  );
};

export default ThemeToggle;
