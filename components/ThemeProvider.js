"use client";

import { ThemeProvider as TP } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return <TP {...props}>{children}</TP>;
}
