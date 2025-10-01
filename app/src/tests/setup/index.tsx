import "@testing-library/jest-dom/vitest";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import type React from "react";

import { type Button } from "@/components/ui/button";

vi.mock("@/utils/cn", () => ({
  cn: (...inputs: ClassValue[]) => twMerge(clsx(inputs)),
}));

vi.mock("@/components/ui/button", () => ({
  Button: (props: React.ComponentProps<typeof Button>) => <button {...props} />,
  buttonVariants: () =>
    vi.fn((props) => {
      const { variant = "default", size = "default", className } = props || {};
      return `btn btn-${variant} btn-${size} ${className || ""}`.trim();
    }),
}));
