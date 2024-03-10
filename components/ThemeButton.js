"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Button() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      The current theme is: {theme}
      <br />
      <button onClick={() => setTheme("light")}>Switch to Light Mode</button>
      <br />
      <button onClick={() => setTheme("dark")}>Switch to Dark Mode</button>
    </>
  );
}

export default function ThemeButton() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="text-center">
      {isMounted ? <Button /> : "Loading Theme Buttons.."}
    </div>
  );
}
