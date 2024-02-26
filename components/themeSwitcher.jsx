"use client";

import React from "react";
import { Switch } from "@nextui-org/react";
import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from "next-themes";

export default function App() {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      defaultSelected
      size="lg"
      color="warning"
      startContent={<BiSun />}
      endContent={<BiMoon />}
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    />
  );
}
